import {IFood} from "../interface/IFood";
import {Button} from "../components/Button";
import {useState} from "react";

export const ProductCard = ({ id, name, price, image, onOrder, amount }: IFood & { onOrder: (id: number, quantity: number) => void }) => {
    const [quantity, setQuantity] = useState(1);
    const isOutOfStock = amount === 0;

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, Math.min(amount, parseInt(e.target.value) || 1));
        setQuantity(value);
    };


    return (
        <>
            <div
                className={`border p-3 mb-3 rounded text-center position-relative ${isOutOfStock ? 'opacity-50' : ''}`}
                style={{
                    backgroundColor: "#f8f9fa",
                    width: "200px",
                    textDecoration: isOutOfStock ? "line-through red wavy" : "none",
                    pointerEvents: isOutOfStock ? "none" : "auto", // disables interaction
                }}
            >
                {isOutOfStock && (
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                            backgroundColor: "rgba(255,0,0,0.2)",
                            color: "red",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                            zIndex: 2
                        }}
                    >
                        Out of stock
                    </div>
                )}

                <img
                    src={image}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                        marginBottom: '12px'
                    }}
                />
                <h5 className="mb-1">{name}</h5>
                <p className="mb-2">${price}</p>

                <div className="mb-2">
                    <label htmlFor={`quantity-${id}`} className="form-label">Quantity:</label>
                    <input
                        type="number"
                        id={`quantity-${id}`}
                        className="form-control"
                        value={quantity}
                        min={1}
                        max={amount}
                        onChange={handleQuantityChange}
                        disabled={isOutOfStock}
                    />
                    <small className="text-muted">Available: {amount}</small>
                </div>

                <Button className={"m-2 w-100"} onClick={() => onOrder(id, quantity)}
                        disabled={isOutOfStock}>Order</Button>
            </div>
        </>
    );
};