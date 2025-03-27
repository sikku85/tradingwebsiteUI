"use client"
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiRefreshCw, FiTrendingUp, FiTrendingDown, FiDollarSign, FiCalendar, FiClock } from 'react-icons/fi';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #2c3e50;
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(to right, #3498db, #2c3e50);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const SelectContainer = styled.div`
  position: relative;
  min-width: 200px;
`;

const SelectLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 500;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 1rem;
  color: #2c3e50;
  appearance: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
  
  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
  }
`;

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #2980b9 0%, #3498db 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(41, 128, 185, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  animation: ${fadeIn} 0.5s ease;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(52, 152, 219, 0.2);
  border-radius: 50%;
  border-top-color: #3498db;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  margin-top: 1rem;
  color: #7f8c8d;
  font-size: 1.1rem;
`;

const ErrorContainer = styled.div`
  padding: 2rem;
  background-color: #fdecea;
  border-radius: 8px;
  color: #c0392b;
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
`;

const DataHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.5s ease;
`;

const DataTitle = styled.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DataContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.5s ease;
`;

const DataTable = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const DataRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  
  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f1f9ff;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const DataHeaderRow = styled(DataRow)`
  font-weight: 600;
  background-color: #f5f7fa !important;
  position: sticky;
  top: 0;
`;

const PriceChange = styled.span`
  color: ${props => props.isPositive ? '#27ae60' : '#e74c3c'};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SummaryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SummaryCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardTitle = styled.div`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
`;

const AlphaVantage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('intraday');
  const [interval, setInterval] = useState('5min');
  const [symbol, setSymbol] = useState('IBM');
  const [lastRefreshed, setLastRefreshed] = useState(null);

  const stockSymbols = ['IBM', 'AAPL', 'GOOGL', 'AMZN', 'MSFT', 'TSLA', 'META', 'NFLX', 'NVDA', 'INTC'];
  const intervals = ['1min', '5min', '15min', '30min', '60min'];

  const fetchData = async (selectedTimeframe, selectedInterval, selectedSymbol) => {
    setLoading(true);
    setError(null);

    const functionType = getFunctionType(selectedTimeframe);
    const intervalParam = selectedTimeframe === 'intraday' ? `&interval=${selectedInterval}` : '';

    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=${functionType}&symbol=${selectedSymbol}${intervalParam}&apikey=SN9R8JDWZL2OQ40V`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await response.json();
      
      // Check for AlphaVantage error messages
      if (result['Error Message'] || result['Note']) {
        throw new Error(result['Error Message'] || result['Note']);
      }

      setData(result);
      setLastRefreshed(new Date());
    } catch (err) {
      setError(err.message || 'Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const getFunctionType = (selectedTimeframe) => {
    const functionMap = {
      'intraday': 'TIME_SERIES_INTRADAY',
      'daily': 'TIME_SERIES_DAILY',
      'dailyAdjusted': 'TIME_SERIES_DAILY_ADJUSTED',
      'weekly': 'TIME_SERIES_WEEKLY',
      'weeklyAdjusted': 'TIME_SERIES_WEEKLY_ADJUSTED',
      'monthly': 'TIME_SERIES_MONTHLY',
      'monthlyAdjusted': 'TIME_SERIES_MONTHLY_ADJUSTED'
    };
    return functionMap[selectedTimeframe] || 'TIME_SERIES_INTRADAY';
  };

  useEffect(() => {
    fetchData(timeframe, interval, symbol);
  }, [timeframe, interval, symbol]);

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  const handleIntervalChange = (e) => {
    setInterval(e.target.value);
  };

  const handleSymbolChange = (e) => {
    setSymbol(e.target.value);
  };

  const handleRefresh = () => {
    fetchData(timeframe, interval, symbol);
  };

  // Extract metadata and time series data
  const metadata = data?.['Meta Data'] || {};
  const timeSeriesKey = Object.keys(data || {}).find(key => key.includes('Time Series'));
  const timeSeriesData = timeSeriesKey ? data[timeSeriesKey] : null;

  // Format the data for display
  const formattedData = timeSeriesData ? Object.entries(timeSeriesData)
    .map(([date, values]) => ({
      date,
      open: parseFloat(values['1. open']).toFixed(2),
      high: parseFloat(values['2. high']).toFixed(2),
      low: parseFloat(values['3. low']).toFixed(2),
      close: parseFloat(values['4. close']).toFixed(2),
      volume: parseInt(values['5. volume']).toLocaleString(),
    }))
    .slice(0, 50) : []; // Limit to 50 entries for performance

  // Calculate summary data
  const summaryData = formattedData.length > 0 ? {
    latestPrice: formattedData[0].close,
    latestVolume: formattedData[0].volume,
    priceChange: (formattedData[0].close - formattedData[1]?.close).toFixed(2),
    percentChange: (((formattedData[0].close - formattedData[1]?.close) / formattedData[1]?.close) * 100).toFixed(2),
    high52Week: Math.max(...formattedData.map(item => parseFloat(item.high))).toFixed(2),
    low52Week: Math.min(...formattedData.map(item => parseFloat(item.low))).toFixed(2),
  } : null;

  return (
    <Container>
      <Header>
        <Title>Stock Market Dashboard</Title>
        {lastRefreshed && (
          <div style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
            Last updated: {lastRefreshed.toLocaleTimeString()}
          </div>
        )}
      </Header>

      <Controls>
        <SelectContainer>
          <SelectLabel>Stock Symbol</SelectLabel>
          <Select value={symbol} onChange={handleSymbolChange}>
            {stockSymbols.map((stock) => (
              <option key={stock} value={stock}>
                {stock}
              </option>
            ))}
          </Select>
        </SelectContainer>

        <SelectContainer>
          <SelectLabel>Timeframe</SelectLabel>
          <Select value={timeframe} onChange={handleTimeframeChange}>
            <option value="intraday">Intraday</option>
            <option value="daily">Daily</option>
            <option value="dailyAdjusted">Daily Adjusted</option>
            <option value="weekly">Weekly</option>
            <option value="weeklyAdjusted">Weekly Adjusted</option>
            <option value="monthly">Monthly</option>
            <option value="monthlyAdjusted">Monthly Adjusted</option>
          </Select>
        </SelectContainer>

        {timeframe === 'intraday' && (
          <SelectContainer>
            <SelectLabel>Interval</SelectLabel>
            <Select value={interval} onChange={handleIntervalChange}>
              {intervals.map(int => (
                <option key={int} value={int}>
                  {int === '1min' ? '1 Minute' : 
                   int === '5min' ? '5 Minutes' : 
                   int === '15min' ? '15 Minutes' : 
                   int === '30min' ? '30 Minutes' : '1 Hour'}
                </option>
              ))}
            </Select>
          </SelectContainer>
        )}

        <RefreshButton onClick={handleRefresh}>
          <FiRefreshCw />
          Refresh Data
        </RefreshButton>
      </Controls>

      {loading ? (
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>Fetching market data...</LoadingText>
        </LoadingContainer>
      ) : error ? (
        <ErrorContainer>
          <h3>Error Loading Data</h3>
          <p>{error}</p>
          <RefreshButton onClick={handleRefresh} style={{ marginTop: '1rem' }}>
            <FiRefreshCw />
            Try Again
          </RefreshButton>
        </ErrorContainer>
      ) : (
        <>
          {summaryData && (
            <SummaryCards>
              <SummaryCard>
                <CardTitle><FiDollarSign /> Current Price</CardTitle>
                <CardValue>${summaryData.latestPrice}</CardValue>
              </SummaryCard>
              <SummaryCard>
                <CardTitle><FiTrendingUp /> Today's Change</CardTitle>
                <CardValue>
                  <PriceChange isPositive={summaryData.priceChange >= 0}>
                    {summaryData.priceChange >= 0 ? '+' : ''}{summaryData.priceChange} ({summaryData.percentChange}%)
                    {summaryData.priceChange >= 0 ? <FiTrendingUp /> : <FiTrendingDown />}
                  </PriceChange>
                </CardValue>
              </SummaryCard>
              <SummaryCard>
                <CardTitle><FiTrendingUp /> 52-Week High</CardTitle>
                <CardValue>${summaryData.high52Week}</CardValue>
              </SummaryCard>
              <SummaryCard>
                <CardTitle><FiTrendingDown /> 52-Week Low</CardTitle>
                <CardValue>${summaryData.low52Week}</CardValue>
              </SummaryCard>
              <SummaryCard>
                <CardTitle>Volume</CardTitle>
                <CardValue>{summaryData.latestVolume}</CardValue>
              </SummaryCard>
            </SummaryCards>
          )}

          <DataHeader>
            <DataTitle>
              {timeframe === 'intraday' ? <FiClock /> : <FiCalendar />}
              Showing {timeframe === 'intraday' ? `Intraday (${interval})` : timeframe.charAt(0).toUpperCase() + timeframe.slice(1)} Data for {symbol}
            </DataTitle>
            <div style={{ color: '#7f8c8d', fontSize: '0.9rem' }}>
              Last Refreshed: {metadata['3. Last Refreshed'] || 'N/A'}
            </div>
          </DataHeader>

          {/* <div>
            <DataTable>
              <DataHeaderRow className=' text-black'>
                <div className=' text-black'>Date/Time</div>
                <div>Open</div>
                <div>High</div>
                <div>Low</div>
                <div>Close</div>
                <div>Volume</div>
              </DataHeaderRow>
              {formattedData.map((item, index) => (
                <DataRow key={index}>
                  <div>{item.date}</div>
                  <div>${item.open}</div>
                  <div>${item.high}</div>
                  <div>${item.low}</div>
                  <div>${item.close}</div>
                  <div>{item.volume}</div>
                </DataRow>
              ))}
            </DataTable>
          </div> */}
        </>
      )}
    </Container>
  );
};

export default AlphaVantage;