import React from 'react';
import { Accordion, ListGroup } from 'react-bootstrap';

const menuList = [
  {
    menuId: "menu1",
    menuName: 'Menu 1',
    subMenuList: [
      { subMenuId: "subMenu1", subMenuName: 'subMenu1', urlLink: '' },
      { subMenuId: "subMenu2", subMenuName: 'subMenu2', urlLink: '' }
    ]
  },
  {
    menuId: "menu2",
    menuName: 'Menu 2',
    subMenuList: [
      { subMenuId: "subMenu3", subMenuName: 'subMenu3', urlLink: '' },
      { subMenuId: "subMenu4", subMenuName: 'subMenu4', urlLink: '' }
    ]
  },
]
const Menu = () => {
  return (
    <div>
      <Accordion flush>
        {menuList.map((item) => {
          return (
            <Accordion.Item eventKey={item.menuId} key={`Accordion-Item-${item.menuId}`}>
              <Accordion.Header key={`Accordion-Header-${item.menuId}`}>{item.menuName}</Accordion.Header>
              <Accordion.Body key={`Accordion-Body-${item.menuId}`}>
                <ListGroup key={`ListGroup-${item.menuId}`}>
                  {
                    item.subMenuList.map((item) => {
                      return (<ListGroup.Item action heft={item.urlLink} key={`ListGroup-Item-${item.subMenuId}`}>{item.subMenuName}</ListGroup.Item>);
                    })
                  }
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </div>
  )
}
export default Menu;