import {IFood} from "../interface/IFood";

export const ProductCard = ({ id, name, price, image, onDelete }: IFood & { onDelete: (id: number) => void }) => {
    return (
        <>
            <div className="border p-3 mb-3 rounded text-center" style={{backgroundColor: "#f8f9fa", width: "200px"}}>
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
                <button className="btn purple w-100" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </>
    );
};