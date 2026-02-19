import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [activeTab, setActiveTab] = useState('totalMemory')
  const [systemInfo, setSystemInfo] = useState(null)
  const [loading, setLoading] = useState(false)

  // Fetch system info when Work tab is opened
  useEffect(() => {
    if (currentPage === 'work') {
      fetchSystemInfo()
    }
  }, [currentPage])

  const fetchSystemInfo = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/system/info')
      const data = await response.json()
      setSystemInfo(data)
    } catch (error) {
      console.error('Error fetching system info:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      {/* Header with Logo */}
      <header className="app-header">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-icon">⚙️</span>
            <h1>System Monitor</h1>
          </div>
        </div>

        {/* Navigation Buttons */}
        <nav className="nav-buttons">
          <button
            className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            🏠 Home
          </button>
          <button
            className={`nav-btn ${currentPage === 'work' ? 'active' : ''}`}
            onClick={() => setCurrentPage('work')}
          >
            💼 Work
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {currentPage === 'home' ? (
          <div className="home-section">
            <div className="welcome-card">
              <h2>Welcome to System Monitor</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <span className="feature-icon">💾</span>
                  <h3>Total Memory</h3>
                  <p>View your system's total RAM</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">📊</span>
                  <h3>Free Memory</h3>
                  <p>Check available memory</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">👤</span>
                  <h3>User Info</h3>
                  <p>System user details</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">🖥️</span>
                  <h3>CPU Architecture</h3>
                  <p>Processor information</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="work-section">
            {/* Tabs */}
            <div className="tabs-header">
              <button
                className={`tab ${activeTab === 'totalMemory' ? 'active' : ''}`}
                onClick={() => setActiveTab('totalMemory')}
              >
                💾 Total Memory
              </button>
              <button
                className={`tab ${activeTab === 'freeMemory' ? 'active' : ''}`}
                onClick={() => setActiveTab('freeMemory')}
              >
                📊 Free Memory
              </button>
              <button
                className={`tab ${activeTab === 'userInfo' ? 'active' : ''}`}
                onClick={() => setActiveTab('userInfo')}
              >
                👤 User Info
              </button>
              <button
                className={`tab ${activeTab === 'cpuArchitecture' ? 'active' : ''}`}
                onClick={() => setActiveTab('cpuArchitecture')}
              >
                🖥️ CPU Architecture
              </button>
            </div>

            {/* Tab Content */}
            <div className="tabs-content">
              {loading ? (
                <div className="loading">Loading system information...</div>
              ) : systemInfo ? (
                <>
                  {activeTab === 'totalMemory' && (
                    <div className="tab-pane">
                      <h3>Total System Memory</h3>
                      <div className="info-grid">
                        <div className="info-item">
                          <label>Total Memory</label>
                          <value>{systemInfo.totalMemory.gb} GB</value>
                        </div>
                        <div className="info-item">
                          <label>Total Memory (Bytes)</label>
                          <value>{systemInfo.totalMemory.bytes.toLocaleString()}</value>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'freeMemory' && (
                    <div className="tab-pane">
                      <h3>Free Memory Information</h3>
                      <div className="info-grid">
                        <div className="info-item">
                          <label>Free Memory</label>
                          <value>{systemInfo.freeMemory.gb} GB</value>
                        </div>
                        <div className="info-item">
                          <label>Memory Usage</label>
                          <value className="usage">{systemInfo.freeMemory.usagePercent}%</value>
                        </div>
                        <div className="info-item">
                          <label>Free Memory (Bytes)</label>
                          <value>{systemInfo.freeMemory.bytes.toLocaleString()}</value>
                        </div>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{width: `${systemInfo.freeMemory.usagePercent}%`}}
                        ></div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'userInfo' && (
                    <div className="tab-pane">
                      <h3>User Information</h3>
                      <div className="info-grid">
                        <div className="info-item">
                          <label>Username</label>
                          <value>{systemInfo.userInfo.username}</value>
                        </div>
                        <div className="info-item">
                          <label>User ID (UID)</label>
                          <value>{systemInfo.userInfo.uid}</value>
                        </div>
                        <div className="info-item">
                          <label>Group ID (GID)</label>
                          <value>{systemInfo.userInfo.gid}</value>
                        </div>
                        <div className="info-item">
                          <label>Home Directory</label>
                          <value>{systemInfo.userInfo.homedir}</value>
                        </div>
                        <div className="info-item full-width">
                          <label>Shell</label>
                          <value>{systemInfo.userInfo.shell}</value>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'cpuArchitecture' && (
                    <div className="tab-pane">
                      <h3>CPU Architecture</h3>
                      <div className="info-grid">
                        <div className="info-item">
                          <label>CPU Architecture</label>
                          <value>{systemInfo.cpu.arch}</value>
                        </div>
                        <div className="info-item">
                          <label>Platform</label>
                          <value>{systemInfo.cpu.platform}</value>
                        </div>
                        <div className="info-item">
                          <label>CPU Cores</label>
                          <value>{systemInfo.cpu.cpus}</value>
                        </div>
                        <div className="info-item">
                          <label>CPU Speed</label>
                          <value>{systemInfo.cpu.speed} MHz</value>
                        </div>
                        <div className="info-item full-width">
                          <label>CPU Model</label>
                          <value>{systemInfo.cpu.model}</value>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="error">Failed to load system information</div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
