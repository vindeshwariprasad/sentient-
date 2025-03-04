import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Usernavbar = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '16px 24px', 
      backgroundColor: 'white', 
      borderBottom: '1px solid #E5E7EB',
      borderRadius: '16px',
      position: 'relative'
    }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
        Hello <br /> {user?.name}
      </h2>
      
      {/* Profile Image */}
      <div style={{ position: 'relative' }}>
        <img 
          src={user?.profileImage || "https://via.placeholder.com/48"} 
          alt={user?.name} 
          style={{ width: '48px', height: '48px', borderRadius: '50%', cursor: 'pointer' }} 
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div style={{
            position: 'absolute',
            top: '60px',
            right: '0',
            backgroundColor: 'white',
            border: '1px solid #E5E7EB',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 10,
            width: '180px',
            textAlign: 'left'
          }}>
            <button 
              onClick={() => navigate('/register')} 
              style={{
                width: '100%',
                padding: '10px',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Register as Recruiter
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Usernavbar;
