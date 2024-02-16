import React, { useState } from 'react';
import './AccordianMenu.css'; // Make sure to create this CSS file

const AccordionItem = ({ title, description, price }) => {
    const [isOpen, setIsOpen] = useState(false); // Starting with false to have them collapsed initially
  
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion-item" onClick={toggle}>
        <div className="accordion-header">
          <span className="title">{title}</span>
          <span className="price">{price}</span>
        </div>
        <div className='description'>{description}</div>
      </div> 
    );
  };
  
  const AccordianMenu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const toggleMenuVisibility = () => {
      setIsMenuVisible(!isMenuVisible);
    };
  
    const menuItems = [
      {
        title: "Pizza",
        description: "A delicious classic pizza with a hand-tossed crust, marinara sauce, mozzarella cheese, and pepperoni.",
        price: "$10.99"
      },
      {
        title: "Pasta",
        description: "Penne pasta served with a creamy Alfredo sauce, grilled chicken, and fresh parsley.",
        price: "$12.99"
      },
      {
        title: "Salad",
        description: "Fresh mixed greens, cherry tomatoes, cucumbers, and red onions, served with your choice of dressing.",
        price: "$8.99"
      }
    ];
  
    return (
        <div className='accordion-container'>
            <div className='accordion'>
                <h2 className="menu-h2" onClick={toggleMenuVisibility}>Burritos +</h2>
                {isMenuVisible && menuItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />

                
                ))}
            </div>
            <div className='accordion'>
                <h2 className="menu-h2" onClick={toggleMenuVisibility}>Burritos +</h2>
                {isMenuVisible && menuItems.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />

                
                ))}
            </div>
      </div>
    );
  };
  
  export default AccordianMenu;