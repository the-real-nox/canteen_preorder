import {Dropdown, Nav, NavDropdown} from "react-bootstrap";
import {useState} from "react";
import {IFood} from "../interface/IFood";
import {ProductCard} from "./ProductCard";

export const FoodContainer = () => {
    const [filter, setFilter] = useState('All');
    const [products, setProducts] = useState<IFood[]>([ // Sample list for testing
        { id: 1, image: '/pizza.jpg', name: 'Pizza', price: 8.99, category: 'Food' },
        { id: 2, image: '/soda.jpg', name: 'Soda', price: 1.99, category: 'Drink' },
        { id: 3, image: '/burger.jpg', name: 'Burger', price: 6.49, category: 'Food' },
    ]);

    const handleSelect = (eventKey: string) => {
        setFilter(eventKey);
    };

    const handleDelete = (id: number) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(product => product.category === filter);

    return (
        <div className={"vw-100 vh-100 p-3"}>
            <div className="d-flex align-items-center border-bottom pb-2 border-3 border-black">
                <p className="mb-0 me-3">Food</p>
                <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {filter}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="All">All</Dropdown.Item>
                        <Dropdown.Item eventKey="Food">Food</Dropdown.Item>
                        <Dropdown.Item eventKey="Drink">Drink</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="d-flex flex-wrap gap-3 p-2">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};