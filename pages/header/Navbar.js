import React from 'react'

const Navbar = () => {
  return (
    <div style={styles.container}>
        <img 
            style={{width: 'auto',height: 40}} 
            src='./logo-no-background.png' 
        />
        <button style={styles.navbtn}>Login</button>
    </div>
  )
}

const styles = {
  container: {
    alignItems: 'center', 
    position: 'fixed',
    flex:1,
    width: '100%',
    backgroundColor: 'white',
    padding: '20px 20px',
    display: 'flex', 
    justifyContent: 'space-between',
    boxShadow: '5px 2px 12px rgba(171, 171, 246, 0.2)'
  },
  navbtn: {
    padding: '10px 40px',
    borderRadius: 4,
    backgroundColor: '#66a8e2',
    color: 'white',
    border: 0
  }
}

export default Navbar