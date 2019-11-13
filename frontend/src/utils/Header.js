import React from 'react';

class Header extends React.Component {
    render() {
    return ( 
    <div>
      <Helmet>
        <style>{'body { background-color: red; }'}</style>
      </Helmet>
    </div>
    
    )
    }
}

export default Header;