// Header
const header = document.querySelector('header');
if (header) {
    header.style.backgroundColor = '#7a3b10';
    header.style.color = 'white';
    header.style.padding = '20px';
    header.style.display = 'flex';
    header.style.alignItems = 'center';
    header.style.justifyContent = 'space-between';
    header.style.flexWrap = 'wrap';
}

// Logo Image
const logoImg = document.querySelector('.logo img');
if (logoImg) {
    logoImg.style.height = '70px';
    logoImg.style.marginLeft = '20px';
}

// Search Bar
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
    searchInput.style.padding = '10px';
    searchInput.style.width = '300px';
    searchInput.style.borderRadius = '5px';
    searchInput.style.border = 'none';
}

const searchButton = document.querySelector('.search-bar button');
if (searchButton) {
    searchButton.style.padding = '10px 15px';
    searchButton.style.backgroundColor = '#5a2d08';
    searchButton.style.color = 'white';
    searchButton.style.border = 'none';
    searchButton.style.borderRadius = '5px';
    searchButton.style.marginLeft = '10px';
    searchButton.style.cursor = 'pointer';

    searchButton.addEventListener('mouseover', () => {
        searchButton.style.backgroundColor = '#3d1e05';
    });
    searchButton.addEventListener('mouseout', () => {
        searchButton.style.backgroundColor = '#5a2d08';
    });
}

// User Icon Image
const userIconImg = document.querySelector('.user-icon img');
if (userIconImg) {
    userIconImg.style.height = '70px';
    userIconImg.style.marginRight = '20px';
    userIconImg.style.borderRadius = '50%';
}

// Heading
const heading = document.querySelector('h1');
if (heading) {
    heading.style.color = 'white';
    heading.style.marginTop = '30px';
    heading.style.fontSize = '36px';
    heading.style.fontWeight = 'bold';
}

// Table Styling
const table = document.querySelector('table');
if (table) {
    table.style.width = '90%';
    table.style.margin = '30px auto';
    table.style.borderCollapse = 'collapse';
    table.style.backgroundColor = '#f3d3a0';
    table.style.borderRadius = '10px';
    table.style.overflow = 'hidden';
    table.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
}

const ths = document.querySelectorAll('th');
ths.forEach(th => {
    th.style.padding = '15px 20px';
    th.style.border = '1px solid #7a3b10';
    th.style.textAlign = 'left';
    th.style.fontSize = '18px';
    th.style.backgroundColor = '#7a3b10';
    th.style.color = 'white';
});

const tds = document.querySelectorAll('td');
tds.forEach(td => {
    td.style.padding = '15px 20px';
    td.style.border = '1px solid #7a3b10';
    td.style.textAlign = 'left';
    td.style.fontSize = '18px';
});

// Collapsible Recipe Styling
const detailsList = document.querySelectorAll('details');
detailsList.forEach(details => {
    details.style.cursor = 'pointer';
});

const summaries = document.querySelectorAll('summary');
summaries.forEach(summary => {
    summary.style.backgroundColor = '#7a3b10';
    summary.style.color = 'white';
    summary.style.borderRadius = '5px';
    summary.style.padding = '6px 12px';
    summary.style.display = 'inline-block';
    summary.style.fontSize = '16px';
    summary.style.fontWeight = 'bold';
    summary.style.transition = 'background-color 0.2s ease';

    summary.addEventListener('mouseover', () => {
        summary.style.backgroundColor = '#5a2d08';
    });
    summary.addEventListener('mouseout', () => {
        summary.style.backgroundColor = '#7a3b10';
    });
});

const detailsParagraphs = document.querySelectorAll('details p');
detailsParagraphs.forEach(p => {
    p.style.margin = '10px 0';
    p.style.padding = '10px 15px';
    p.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    p.style.borderRadius = '5px';
    p.style.fontSize = '16px';
    p.style.textAlign = 'left';
});

// Action Buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.style.padding = '8px 12px';
    button.style.fontSize = '14px';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.margin = '5px 4px';
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.2s ease, transform 0.1s ease';

    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
        button.style.opacity = '0.9';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.opacity = '1';
    });

    if (button.classList.contains('like-btn')) {
        button.style.backgroundColor = '#e86c5d';
        button.style.color = 'white';
    }
    if (button.classList.contains('save-btn')) {
        button.style.backgroundColor = '#4287f5';
        button.style.color = 'white';
    }
});

// Specific Liked/Saved Button State
const likedButtons = document.querySelectorAll('button.liked');
likedButtons.forEach(button => {
    button.style.backgroundColor = '#c0392b';
});

const savedButtons = document.querySelectorAll('button.saved');
savedButtons.forEach(button => {
    button.style.backgroundColor = '#2e6fdb';
});
document.addEventListener('DOMContentLoaded', () => {
    // Body
    document.body.style.fontFamily = 'Arial, sans-serif';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#964713';
    document.body.style.textAlign = 'center';

    // Header
    const header = document.querySelector('header');
    if (header) {
        Object.assign(header.style, {
            backgroundColor: '#7a3b10',
            color: 'white',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        });
    }

    // Logo Image
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
        Object.assign(logoImg.style, {
            height: '70px',
            marginLeft: '20px'
        });
    }

    // Search Bar Input
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        Object.assign(searchInput.style, {
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: 'none'
        });
    }

    // Search Bar Button
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
        Object.assign(searchButton.style, {
            padding: '10px 15px',
            backgroundColor: '#5a2d08',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginLeft: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
        });

        searchButton.addEventListener('mouseover', () => {
            searchButton.style.backgroundColor = '#3d1e05';
        });
        searchButton.addEventListener('mouseout', () => {
            searchButton.style.backgroundColor = '#5a2d08';
        });
    }

    // User Icon
    const userIconImg = document.querySelector('.user-icon img');
    if (userIconImg) {
        Object.assign(userIconImg.style, {
            height: '70px',
            marginRight: '20px',
            borderRadius: '50%'
        });
    }

    // Heading h1
    const heading = document.querySelector('h1');
    if (heading) {
        Object.assign(heading.style, {
            color: 'white',
            marginTop: '30px',
            fontSize: '36px',
            fontWeight: 'bold'
        });
    }

    // Table
    const table = document.querySelector('table');
    if (table) {
        Object.assign(table.style, {
            width: '90%',
            margin: '30px auto',
            borderCollapse: 'collapse',
            backgroundColor: '#f3d3a0',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        });
    }

    // Table Headers and Cells
    const ths = document.querySelectorAll('th');
    ths.forEach(th => {
        Object.assign(th.style, {
            padding: '15px 20px',
            border: '1px solid #7a3b10',
            textAlign: 'left',
            fontSize: '18px',
            backgroundColor: '#7a3b10',
            color: 'white'
        });
    });

    const tds = document.querySelectorAll('td');
    tds.forEach(td => {
        Object.assign(td.style, {
            padding: '15px 20px',
            border: '1px solid #7a3b10',
            textAlign: 'left',
            fontSize: '18px'
        });
    });

    // Collapsible Details
    const detailsList = document.querySelectorAll('details');
    detailsList.forEach(details => {
        details.style.cursor = 'pointer';
    });

    const summaries = document.querySelectorAll('summary');
    summaries.forEach(summary => {
        Object.assign(summary.style, {
            backgroundColor: '#7a3b10',
            color: 'white',
            borderRadius: '5px',
            padding: '6px 12px',
            display: 'inline-block',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease'
        });

        summary.addEventListener('mouseover', () => {
            summary.style.backgroundColor = '#5a2d08';
        });
        summary.addEventListener('mouseout', () => {
            summary.style.backgroundColor = '#7a3b10';
        });
    });

    const detailsParagraphs = document.querySelectorAll('details p');
    detailsParagraphs.forEach(p => {
        Object.assign(p.style, {
            margin: '10px 0',
            padding: '10px 15px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '5px',
            fontSize: '16px',
            textAlign: 'left'
        });
    });

    // Buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        Object.assign(button.style, {
            padding: '8px 12px',
            fontSize: '14px',
            border: 'none',
            borderRadius: '5px',
            margin: '5px 4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, transform 0.1s ease'
        });

        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.opacity = '0.9';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
            button.style.opacity = '1';
        });

        // Class-based specific styles
        if (button.classList.contains('like-btn')) {
            button.style.backgroundColor = '#e86c5d';
            button.style.color = 'white';
        }
        if (button.classList.contains('save-btn')) {
            button.style.backgroundColor = '#4287f5';
            button.style.color = 'white';
        }
        if (button.classList.contains('liked')) {
            button.style.backgroundColor = '#c0392b';
        }
        if (button.classList.contains('saved')) {
            button.style.backgroundColor = '#2e6fdb';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Body styles
    Object.assign(document.body.style, {
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        padding: '0',
        backgroundColor: '#964713',
        textAlign: 'center'
    });

    // Header styles
    const header = document.querySelector('header');
    if (header) {
        Object.assign(header.style, {
            backgroundColor: '#7a3b10',
            color: 'white',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        });
    }

    // Logo Image styles
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
        Object.assign(logoImg.style, {
            height: '70px',
            marginLeft: '20px'
        });
    }

    // Search Bar Input
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        Object.assign(searchInput.style, {
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: 'none'
        });
    }

    // Search Bar Button
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
        Object.assign(searchButton.style, {
            padding: '10px 15px',
            backgroundColor: '#5a2d08',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginLeft: '10px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
        });

        searchButton.addEventListener('mouseover', () => {
            searchButton.style.backgroundColor = '#3d1e05';
        });
        searchButton.addEventListener('mouseout', () => {
            searchButton.style.backgroundColor = '#5a2d08';
        });
    }

    // User Icon Image
    const userIconImg = document.querySelector('.user-icon img');
    if (userIconImg) {
        Object.assign(userIconImg.style, {
            height: '70px',
            marginRight: '20px',
            borderRadius: '50%'
        });
    }

    // Main Heading h1
    const heading = document.querySelector('h1');
    if (heading) {
        Object.assign(heading.style, {
            color: 'white',
            marginTop: '30px',
            fontSize: '36px',
            fontWeight: 'bold'
        });
    }

    // Table styles
    const table = document.querySelector('table');
    if (table) {
        Object.assign(table.style, {
            width: '90%',
            margin: '30px auto',
            borderCollapse: 'collapse',
            backgroundColor: '#f3d3a0',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        });
    }

    // Table th and td
    const ths = document.querySelectorAll('th');
    ths.forEach(th => {
        Object.assign(th.style, {
            padding: '15px 20px',
            border: '1px solid #7a3b10',
            textAlign: 'left',
            fontSize: '18px',
            backgroundColor: '#7a3b10',
            color: 'white'
        });
    });

    const tds = document.querySelectorAll('td');
    tds.forEach(td => {
        Object.assign(td.style, {
            padding: '15px 20px',
            border: '1px solid #7a3b10',
            textAlign: 'left',
            fontSize: '18px'
        });
    });

    // Collapsible details
    const detailsList = document.querySelectorAll('details');
    detailsList.forEach(details => {
        details.style.cursor = 'pointer';
    });

    // Summaries inside details
    const summaries = document.querySelectorAll('summary');
    summaries.forEach(summary => {
        Object.assign(summary.style, {
            backgroundColor: '#7a3b10',
            color: 'white',
            borderRadius: '5px',
            padding: '6px 12px',
            display: 'inline-block',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease'
        });

        summary.addEventListener('mouseover', () => {
            summary.style.backgroundColor = '#5a2d08';
        });
        summary.addEventListener('mouseout', () => {
            summary.style.backgroundColor = '#7a3b10';
        });
    });

    // Paragraphs inside details
    const detailParagraphs = document.querySelectorAll('details p');
    detailParagraphs.forEach(p => {
        Object.assign(p.style, {
            margin: '10px 0',
            padding: '10px 15px',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '5px',
            fontSize: '16px',
            textAlign: 'left'
        });
    });

    // Buttons styling
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        Object.assign(button.style, {
            padding: '8px 12px',
            fontSize: '14px',
            border: 'none',
            borderRadius: '5px',
            margin: '5px 4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease, transform 0.1s ease'
        });

        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.opacity = '0.9';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
            button.style.opacity = '1';
        });

        // Specific classes for buttons
        if (button.classList.contains('like-btn')) {
            button.style.backgroundColor = '#e86c5d';
            button.style.color = 'white';
        }
        if (button.classList.contains('save-btn')) {
            button.style.backgroundColor = '#4287f5';
            button.style.color = 'white';
        }
        if (button.classList.contains('liked')) {
            button.style.backgroundColor = '#c0392b';
        }
        if (button.classList.contains('saved')) {
            button.style.backgroundColor = '#2e6fdb';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Body
    Object.assign(document.body.style, {
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      backgroundColor: '#964713',
      textAlign: 'center'
    });
  
    // Header
    const header = document.querySelector('header');
    if (header) {
      Object.assign(header.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      });
    }
  
    // Logo Image
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
      Object.assign(logoImg.style, {
        height: '70px',
        marginLeft: '20px'
      });
    }
  
    // Search Bar Input
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
      Object.assign(searchInput.style, {
        padding: '10px',
        width: '300px',
        borderRadius: '5px',
        border: 'none'
      });
    }
  
    // Search Bar Button
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
      Object.assign(searchButton.style, {
        padding: '10px 15px',
        backgroundColor: '#5a2d08',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginLeft: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease'
      });
  
      searchButton.addEventListener('mouseenter', () => {
        searchButton.style.backgroundColor = '#3d1e05';
      });
  
      searchButton.addEventListener('mouseleave', () => {
        searchButton.style.backgroundColor = '#5a2d08';
      });
    }
  
    // User Icon
    const userIcon = document.querySelector('.user-icon img');
    if (userIcon) {
      Object.assign(userIcon.style, {
        height: '70px',
        marginRight: '20px',
        borderRadius: '50%'
      });
    }
  
    // Heading
    const heading = document.querySelector('h1');
    if (heading) {
      Object.assign(heading.style, {
        color: 'white',
        marginTop: '30px',
        fontSize: '36px',
        fontWeight: 'bold'
      });
    }
  
    // Table
    const table = document.querySelector('table');
    if (table) {
      Object.assign(table.style, {
        width: '90%',
        margin: '30px auto',
        borderCollapse: 'collapse',
        backgroundColor: '#f3d3a0',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      });
    }
  
    // Table Headings
    const ths = document.querySelectorAll('th');
    ths.forEach(th => {
      Object.assign(th.style, {
        padding: '15px 20px',
        border: '1px solid #7a3b10',
        textAlign: 'left',
        fontSize: '18px',
        backgroundColor: '#7a3b10',
        color: 'white'
      });
    });
  
    // Table Cells
    const tds = document.querySelectorAll('td');
    tds.forEach(td => {
      Object.assign(td.style, {
        padding: '15px 20px',
        border: '1px solid #7a3b10',
        textAlign: 'left',
        fontSize: '18px'
      });
    });
  
    // Collapsible Details
    const details = document.querySelectorAll('details');
    details.forEach(detail => {
      detail.style.cursor = 'pointer';
    });
  
    // Summary inside details
    const summaries = document.querySelectorAll('summary');
    summaries.forEach(summary => {
      Object.assign(summary.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        borderRadius: '5px',
        padding: '6px 12px',
        display: 'inline-block',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.2s ease'
      });
  
      summary.addEventListener('mouseenter', () => {
        summary.style.backgroundColor = '#5a2d08';
      });
  
      summary.addEventListener('mouseleave', () => {
        summary.style.backgroundColor = '#7a3b10';
      });
    });
  
    // Paragraph inside details
    const detailParagraphs = document.querySelectorAll('details p');
    detailParagraphs.forEach(p => {
      Object.assign(p.style, {
        margin: '10px 0',
        padding: '10px 15px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '5px',
        fontSize: '16px',
        textAlign: 'left'
      });
    });
  
    // Action Buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      Object.assign(button.style, {
        padding: '8px 12px',
        fontSize: '14px',
        border: 'none',
        borderRadius: '5px',
        margin: '5px 4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease, transform 0.1s ease'
      });
  
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.opacity = '0.9';
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.opacity = '1';
      });
  
      if (button.classList.contains('like-btn')) {
        button.style.backgroundColor = '#e86c5d';
        button.style.color = 'white';
      }
      if (button.classList.contains('save-btn')) {
        button.style.backgroundColor = '#4287f5';
        button.style.color = 'white';
      }
      if (button.classList.contains('liked')) {
        button.style.backgroundColor = '#c0392b';
      }
      if (button.classList.contains('saved')) {
        button.style.backgroundColor = '#2e6fdb';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Body styles
    Object.assign(document.body.style, {
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      backgroundColor: '#964713',
      textAlign: 'center'
    });
  
    // Header styles
    const header = document.querySelector('header');
    if (header) {
      Object.assign(header.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      });
    }
  
    // Logo image
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
      Object.assign(logoImg.style, {
        height: '70px',
        marginLeft: '20px'
      });
    }
  
    // Search bar input
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
      Object.assign(searchInput.style, {
        padding: '10px',
        width: '300px',
        borderRadius: '5px',
        border: 'none'
      });
    }
  
    // Search bar button
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
      Object.assign(searchButton.style, {
        padding: '10px 15px',
        backgroundColor: '#5a2d08',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginLeft: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease'
      });
  
      searchButton.addEventListener('mouseenter', () => {
        searchButton.style.backgroundColor = '#3d1e05';
      });
      searchButton.addEventListener('mouseleave', () => {
        searchButton.style.backgroundColor = '#5a2d08';
      });
    }
  
    // User icon image
    const userIconImg = document.querySelector('.user-icon img');
    if (userIconImg) {
      Object.assign(userIconImg.style, {
        height: '70px',
        marginRight: '20px',
        borderRadius: '50%'
      });
    }
  
    // Heading h1
    const heading = document.querySelector('h1');
    if (heading) {
      Object.assign(heading.style, {
        color: 'white',
        marginTop: '30px',
        fontSize: '36px',
        fontWeight: 'bold'
      });
    }
  
    // Table styles
    const table = document.querySelector('table');
    if (table) {
      Object.assign(table.style, {
        width: '90%',
        margin: '30px auto',
        borderCollapse: 'collapse',
        backgroundColor: '#f3d3a0',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      });
    }
  
    // Table headers (th)
    const thElements = document.querySelectorAll('th');
    thElements.forEach(th => {
      Object.assign(th.style, {
        padding: '15px 20px',
        border: '1px solid #7a3b10',
        textAlign: 'left',
        fontSize: '18px',
        backgroundColor: '#7a3b10',
        color: 'white'
      });
    });
  
    // Table cells (td)
    const tdElements = document.querySelectorAll('td');
    tdElements.forEach(td => {
      Object.assign(td.style, {
        padding: '15px 20px',
        border: '1px solid #7a3b10',
        textAlign: 'left',
        fontSize: '18px'
      });
    });
  
    // Collapsible (details)
    const detailElements = document.querySelectorAll('details');
    detailElements.forEach(detail => {
      detail.style.cursor = 'pointer';
    });
  
    // Summary inside details
    const summaryElements = document.querySelectorAll('summary');
    summaryElements.forEach(summary => {
      Object.assign(summary.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        borderRadius: '5px',
        padding: '6px 12px',
        display: 'inline-block',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.2s ease'
      });
  
      summary.addEventListener('mouseenter', () => {
        summary.style.backgroundColor = '#5a2d08';
      });
      summary.addEventListener('mouseleave', () => {
        summary.style.backgroundColor = '#7a3b10';
      });
    });
  
    // Paragraph inside details
    const detailParagraphs = document.querySelectorAll('details p');
    detailParagraphs.forEach(p => {
      Object.assign(p.style, {
        margin: '10px 0',
        padding: '10px 15px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '5px',
        fontSize: '16px',
        textAlign: 'left'
      });
    });
  
    // All buttons
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
      Object.assign(button.style, {
        padding: '8px 12px',
        fontSize: '14px',
        border: 'none',
        borderRadius: '5px',
        margin: '5px 4px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease, transform 0.1s ease'
      });
  
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.opacity = '0.9';
      });
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.opacity = '1';
      });
  
      if (button.classList.contains('like-btn')) {
        button.style.backgroundColor = '#e86c5d';
        button.style.color = 'white';
      }
      if (button.classList.contains('save-btn')) {
        button.style.backgroundColor = '#4287f5';
        button.style.color = 'white';
      }
      if (button.classList.contains('liked')) {
        button.style.backgroundColor = '#c0392b';
      }
      if (button.classList.contains('saved')) {
        button.style.backgroundColor = '#2e6fdb';
      }
    });
  
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Body Styles
    Object.assign(document.body.style, {
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      backgroundColor: '#964713',
      textAlign: 'center'
    });
  
    // Header
    const header = document.querySelector('header');
    if (header) {
      Object.assign(header.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      });
    }
  
    // Logo Image
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
      Object.assign(logoImg.style, {
        height: '70px',
        marginLeft: '20px'
      });
    }
  
    // Search Bar
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
      Object.assign(searchInput.style, {
        padding: '10px',
        width: '300px',
        borderRadius: '5px',
        border: 'none'
      });
    }
  
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
      Object.assign(searchButton.style, {
        padding: '10px 15px',
        backgroundColor: '#5a2d08',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginLeft: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease'
      });
  
      searchButton.addEventListener('mouseenter', () => {
        searchButton.style.backgroundColor = '#3d1e05';
      });
      searchButton.addEventListener('mouseleave', () => {
        searchButton.style.backgroundColor = '#5a2d08';
      });
    }
  
    // User Icon Image
    const userIconImg = document.querySelector('.user-icon img');
    if (userIconImg) {
      Object.assign(userIconImg.style, {
        height: '70px',
        marginRight: '20px',
        borderRadius: '50%'
      });
    }
  
    // Food Banner Image
    const foodPicImg = document.querySelector('.food-pic img');
    if (foodPicImg) {
      Object.assign(foodPicImg.style, {
        maxWidth: '100%',
        height: 'auto'
      });
    }
  
    // Food Categories Grid
    const foodCategories = document.querySelector('.food-categories');
    if (foodCategories) {
      Object.assign(foodCategories.style, {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '150px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '20px auto'
      });
    }
  
    // Each Category Card
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
      Object.assign(category.style, {
        background: 'rgb(233, 194, 137)',
        padding: '15px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textDecoration: 'none',
        color: 'black',
        transition: 'transform 0.3s ease'
      });
  
      category.addEventListener('mouseenter', () => {
        category.style.transform = 'scale(1.05)';
      });
      category.addEventListener('mouseleave', () => {
        category.style.transform = 'scale(1)';
      });
  
      // Inside each category, image styling
      const catImg = category.querySelector('img');
      if (catImg) {
        Object.assign(catImg.style, {
          width: '100%',
          borderRadius: '10px'
        });
      }
  
      // Inside each category, h2 styling
      const catHeading = category.querySelector('h2');
      if (catHeading) {
        Object.assign(catHeading.style, {
          marginTop: '10px',
          color: '#333'
        });
      }
    });
  
    // Footer
    const footer = document.querySelector('footer');
    if (footer) {
      Object.assign(footer.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        marginTop: '50px'
      });
    }
  
    // Footer Content Paragraphs
    const footerParagraphs = document.querySelectorAll('.footer-content p');
    footerParagraphs.forEach(p => {
      p.style.margin = '5px 0';
    });
  
    // Social Icons
    const socialIcons = document.querySelector('.social-icons');
    if (socialIcons) {
      socialIcons.style.marginTop = '10px';
    }
  
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(a => {
      Object.assign(a.style, {
        margin: '0 10px',
        display: 'inline-block'
      });
    });
  
    const socialImgs = document.querySelectorAll('.social-icons img');
    socialImgs.forEach(img => {
      Object.assign(img.style, {
        width: '30px',
        height: '30px',
        borderRadius: '50%'
      });
    });
  
    // Responsive Media Queries Handling
    const applyResponsiveStyles = () => {
      const width = window.innerWidth;
  
      if (width <= 768) {
        if (logoImg) logoImg.style.height = '60px';
        if (userIconImg) userIconImg.style.height = '60px';
        if (searchInput) searchInput.style.width = '90%';
        if (foodCategories) {
          foodCategories.style.gridTemplateColumns = 'repeat(auto-fit, minmax(150px, 1fr))';
          foodCategories.style.gap = '20px';
        }
        categories.forEach(category => {
          category.style.padding = '10px';
          const catHeading = category.querySelector('h2');
          if (catHeading) {
            catHeading.style.fontSize = '16px';
          }
        });
        socialImgs.forEach(img => {
          img.style.width = '25px';
          img.style.height = '25px';
        });
      } else if (width <= 1024) {
        if (header) {
          header.style.flexDirection = 'column';
          header.style.textAlign = 'center';
        }
        const searchBar = document.querySelector('.search-bar');
        if (searchBar) {
          searchBar.style.margin = '10px 0';
        }
        if (searchInput) searchInput.style.width = '80%';
        if (foodCategories) foodCategories.style.gap = '30px';
      } else {
        // Reset styles for desktop
        if (header) {
          header.style.flexDirection = 'row';
          header.style.textAlign = 'initial';
        }
        if (searchInput) searchInput.style.width = '300px';
        if (foodCategories) {
          foodCategories.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
          foodCategories.style.gap = '150px';
        }
      }
    };
  
    // Apply on page load
    applyResponsiveStyles();
    // Reapply on window resize
    window.addEventListener('resize', applyResponsiveStyles);
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Body
    Object.assign(document.body.style, {
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      backgroundColor: '#964713',
      textAlign: 'center'
    });
  
    // Header
    const header = document.querySelector('header');
    if (header) {
      Object.assign(header.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        padding: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      });
    }
  
    // Logo Image
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
      Object.assign(logoImg.style, {
        height: '90px',
        width: 'auto',
        marginLeft: '20px'
      });
    }
  
    // Search Bar Input
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
      Object.assign(searchInput.style, {
        padding: '10px',
        width: '300px',
        borderRadius: '5px',
        border: 'none'
      });
    }
  
    // User Icon Image
    const userIconImg = document.querySelector('.user-icon img');
    if (userIconImg) {
      Object.assign(userIconImg.style, {
        height: '90px',
        width: 'auto',
        marginRight: '20px',
        borderRadius: '100px'
      });
    }
  
    // Login Container
    const loginContainer = document.querySelector('.login-container');
    if (loginContainer) {
      Object.assign(loginContainer.style, {
        background: 'rgb(233, 194, 137)',
        width: '350px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      });
    }
  
    // Login Heading
    const loginHeading = document.querySelector('.login-container h2');
    if (loginHeading) {
      loginHeading.style.color = '#7a3b10';
    }
  
    // Form
    const form = document.querySelector('form');
    if (form) {
      Object.assign(form.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      });
    }
  
    // Labels
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
      Object.assign(label.style, {
        fontSize: '18px',
        color: '#333',
        marginTop: '10px'
      });
    });
  
    // Form Inputs
    const formInputs = document.querySelectorAll('input');
    formInputs.forEach(input => {
      Object.assign(input.style, {
        width: '80%',
        padding: '10px',
        marginTop: '5px',
        borderRadius: '5px',
        border: '1px solid #7a3b10'
      });
    });
  
    // Form Button
    const button = document.querySelector('button');
    if (button) {
      Object.assign(button.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '16px',
        marginTop: '15px',
        transition: 'background-color 0.2s ease'
      });
  
      // Hover effect
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#5a2d08';
      });
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#7a3b10';
      });
    }
  
    // Forgot Password Container
    const forgotPassword = document.querySelector('.forgot-password');
    if (forgotPassword) {
      forgotPassword.style.marginTop = '10px';
    }
  
    // Forgot Password Link
    const forgotPasswordLink = document.querySelector('.forgot-password a');
    if (forgotPasswordLink) {
      Object.assign(forgotPasswordLink.style, {
        textDecoration: 'none',
        color: '#7a3b10',
        fontSize: '14px',
        transition: 'text-decoration 0.2s ease'
      });
  
      forgotPasswordLink.addEventListener('mouseenter', () => {
        forgotPasswordLink.style.textDecoration = 'underline';
      });
      forgotPasswordLink.addEventListener('mouseleave', () => {
        forgotPasswordLink.style.textDecoration = 'none';
      });
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Body
    Object.assign(document.body.style, {
      fontFamily: 'Arial, sans-serif',
      margin: '0',
      padding: '0',
      backgroundColor: '#964713',
      textAlign: 'center'
    });
  
    // Header
    const header = document.querySelector('header');
    if (header) {
      Object.assign(header.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      });
    }
  
    // Logo Image
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
      Object.assign(logoImg.style, {
        height: '70px',
        marginLeft: '20px'
      });
    }
  
    // Search Bar Input
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
      Object.assign(searchInput.style, {
        padding: '10px',
        width: '300px',
        borderRadius: '5px',
        border: 'none'
      });
    }
  
    // Search Bar Button
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
      Object.assign(searchButton.style, {
        padding: '10px 15px',
        backgroundColor: '#5a2d08',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginLeft: '10px',
        cursor: 'pointer'
      });
  
      searchButton.addEventListener('mouseenter', () => {
        searchButton.style.backgroundColor = '#3d1e05';
      });
  
      searchButton.addEventListener('mouseleave', () => {
        searchButton.style.backgroundColor = '#5a2d08';
      });
    }
  
    // User Icon
    const userIconImg = document.querySelector('.user-icon img');
    if (userIconImg) {
      Object.assign(userIconImg.style, {
        height: '70px',
        marginRight: '20px',
        borderRadius: '50%'
      });
    }
  
    // H1 Title
    const h1 = document.querySelector('h1');
    if (h1) {
      Object.assign(h1.style, {
        color: 'white',
        marginTop: '30px',
        fontSize: '36px',
        fontWeight: 'bold'
      });
    }
  
    // Table
    const table = document.querySelector('table');
    if (table) {
      Object.assign(table.style, {
        width: '90%',
        margin: '30px auto',
        borderCollapse: 'collapse',
        backgroundColor: '#f3d3a0',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      });
    }
  
    // Table Headers and Cells
    const ths = document.querySelectorAll('th');
    ths.forEach(th => {
      Object.assign(th.style, {
        padding: '15px 20px',
        border: '1px solid #7a3b10',
        textAlign: 'left',
        fontSize: '18px',
        backgroundColor: '#7a3b10',
        color: 'white'
      });
    });
  
    const tds = document.querySelectorAll('td');
    tds.forEach(td => {
      Object.assign(td.style, {
        padding: '15px 20px',
        border: '1px solid #7a3b10',
        textAlign: 'left',
        fontSize: '18px'
      });
    });
  
    // Collapsible <details> elements
    const details = document.querySelectorAll('details');
    details.forEach(detail => {
      detail.style.cursor = 'pointer';
    });
  
    // Summary inside details
    const summaries = document.querySelectorAll('summary');
    summaries.forEach(summary => {
      Object.assign(summary.style, {
        backgroundColor: '#7a3b10',
        color: 'white',
        borderRadius: '5px',
        padding: '6px 12px',
        display: 'inline-block',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.2s ease'
      });
  
      summary.addEventListener('mouseenter', () => {
        summary.style.backgroundColor = '#5a2d08';
      });
  
      summary.addEventListener('mouseleave', () => {
        summary.style.backgroundColor = '#7a3b10';
      });
    });
  
    // Paragraph inside details
    const detailPs = document.querySelectorAll('details p');
    detailPs.forEach(p => {
      Object.assign(p.style, {
        margin: '10px 0',
        padding: '10px 15px',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '5px',
        fontSize: '16px',
        textAlign: 'left'
      });
    });
  
    // All Buttons (except search button)
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
      if (btn !== searchButton) { // already styled searchButton
        Object.assign(btn.style, {
          padding: '8px 12px',
          fontSize: '14px',
          border: 'none',
          borderRadius: '5px',
          margin: '5px 4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease, transform 0.1s ease'
        });
  
        btn.addEventListener('mouseenter', () => {
          btn.style.transform = 'scale(1.05)';
          btn.style.opacity = '0.9';
        });
  
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'scale(1)';
          btn.style.opacity = '1';
        });
      }
    });
  
    // Like Buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
      btn.style.backgroundColor = '#e86c5d';
      btn.style.color = 'white';
    });
  
    // Save Buttons
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(btn => {
      btn.style.backgroundColor = '#4287f5';
      btn.style.color = 'white';
    });
  
    // When Liked
    const likedButtons = document.querySelectorAll('button.liked');
    likedButtons.forEach(btn => {
      btn.style.backgroundColor = '#c0392b';
    });
  
    // When Saved
    const savedButtons = document.querySelectorAll('button.saved');
    savedButtons.forEach(btn => {
      btn.style.backgroundColor = '#2e6fdb';
    });
  })