import { useState } from 'react';
import './CreateStreamModal.css';

interface CreateStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateStreamModal({ isOpen, onClose }: CreateStreamModalProps) {
  const [accrualRate, setAccrualRate] = useState('38.62');
  const [duration, setDuration] = useState('1');
  const [startTimeOption, setStartTimeOption] = useState<'now' | 'custom'>('now');
  const [cliffEnabled, setCliffEnabled] = useState(false);
  const [cliffDate, setCliffDate] = useState('');

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h2>Create stream</h2>
          <button className="close-button" onClick={onClose} aria-label="Close modal">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Progress Tracker */}
        <div className="progress-tracker">
          <div className="progress-line" ><div className="progress-line-fill" /></div>
          
          
          <div className="step-item completed">
            <div className="step-circle">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="step-label">Recipient &<br/>amount</div>
          </div>

          <div className="step-item active">
            <div className="step-circle">2</div>
            <div className="step-label">Rate &<br/>schedule</div>
          </div>

          <div className="step-item">
            <div className="step-circle">3</div>
            <div className="step-label">Review &<br/>create</div>
          </div>
        </div>

        <hr className="divider" />
        
        <div className="section-header">
          <h3>Rate & schedule</h3>
          <p>Configure how fast USDC streams and when it starts.</p>
        </div>

        {/* Stream Rate */}
        <div className="form-group">
          <label className="form-label">Stream rate <span className="required">*</span></label>
          <div className="form-row">
            <div className="input-container">
              <div className="input-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <input
                type="text"
                className="input-field"
                value={accrualRate}
                onChange={(e) => setAccrualRate(e.target.value)}
                placeholder="0.00"
              />
            </div>
            <div className="input-container narrow">
              <span style={{color: 'transparent'}}>_</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{color: 'var(--muted)'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <span className="form-helper">How much USDC accrues per time unit.</span>
        </div>

        {/* Stream Duration */}
        <div className="form-group">
          <label className="form-label">Stream duration <span className="required">*</span></label>
          <div className="form-row">
            <div className="input-container">
              <div className="input-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="input-field"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="1"
              />
            </div>
            <div className="input-container narrow">
              <span style={{color: 'transparent'}}>_</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{color: 'var(--muted)'}}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <span className="form-helper">How long the stream will run before ending.</span>
        </div>

        {/* Start Time */}
        <div className="form-group">
          <label className="form-label">Start time</label>
          <div className="segmented-control">
            <button
              className={`segment-btn ${startTimeOption === 'now' ? 'active' : ''}`}
              onClick={() => setStartTimeOption('now')}
            >
              Start now
            </button>
            <button
              className={`segment-btn ${startTimeOption === 'custom' ? 'active' : ''}`}
              onClick={() => setStartTimeOption('custom')}
            >
              Custom date
            </button>
          </div>
          <span className="form-helper">When the stream begins accruing USDC.</span>
        </div>

        {/* Cliff Period */}
        <div className="form-group">
          <label className="form-label">Cliff period <span style={{color: 'var(--muted)', fontWeight: 'normal'}}>(optional)</span></label>
          <div className="toggle-container" onClick={() => setCliffEnabled(!cliffEnabled)}>
            <div className={`toggle-switch ${cliffEnabled ? 'on' : ''}`}>
              <div className="toggle-knob" />
            </div>
            <span>Enable cliff (no withdrawals until specific date)</span>
          </div>
          {cliffEnabled && (
            <div className="input-container" style={{ marginTop: '0.75rem' }}>
              <div className="input-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="date"
                className="input-field"
                value={cliffDate}
                onChange={(e) => setCliffDate(e.target.value)}
              />
            </div>
          )}
          <span className="form-helper">No accrual until cliff time. Useful for vesting schedules.</span>
        </div>

        {/* Deposit Summary */}
        <div className="deposit-summary">
          <div className="deposit-box">
            <div className="deposit-label">Required deposit</div>
            <div className="deposit-value">38.62 USDC</div>
          </div>
          <div className="deposit-box">
            <div className="deposit-label">Your deposit</div>
            <div className="deposit-value">200.00 USDC</div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn-back">Back</button>
          <button className="btn btn-next">Next</button>
        </div>

      </div>
    </div>
  );
}
