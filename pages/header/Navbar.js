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
    padding: '20px 20px',
    display: 'flex', 
    justifyContent: 'space-between'
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