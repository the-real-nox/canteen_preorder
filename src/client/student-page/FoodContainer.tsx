import {Dropdown, Nav, NavDropdown} from "react-bootstrap";
import {useState} from "react";
import {IFood} from "../interface/IFood";
import {ProductCard} from "./ProductCard";

interface FoodContainerProps {
    searchValue: string;
}

export const FoodContainer = ({searchValue}:FoodContainerProps) => {
    const [filter, setFilter] = useState('All');
    const [products, setProducts] = useState<IFood[]>([
        { id: 1, image: '/pizza.jpg', name: 'Pizza', price: 8.99, category: 'Food', amount: 5},
        { id: 2, image: '/soda.jpg', name: 'Soda', price: 1.99, category: 'Drink', amount: 4},
        { id: 3, image: '/burger.jpg', name: 'Burger', price: 6.49, category: 'Food', amount: 2},
        { id: 4, image: '/cola.jpg', name: 'Cola', price: 2.50, category: 'Drink', amount: 7},
        { id: 5, image: '/steak.jpg', name: 'Steak', price: 11.49, category: 'Food', amount: 3},
    ]);

    const handleSelect = (eventKey: string) => {
        setFilter(eventKey);
    };

    const onOrder = (id: number, quantity: number) => {
        setProducts(prev =>
            prev.map(product => product.id === id ? {...product,
                        amount: Math.max(product.amount - quantity, 0) } : product)
        );
    };


    const filteredProducts = products.filter(product => {
        const matchesCategory = filter === 'All' || product.category === filter;
        const matchesSearch = product.name.toLowerCase().includes(searchValue.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
                        onOrder={onOrder}
                        amount={product.amount}
                    />
                ))}
            </div>
        </div>
    );
};