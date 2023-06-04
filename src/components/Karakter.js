// Karakter bileşeniniz buraya gelecek

const Karakter = (props) => {
    const { item } = props;

    return (
        <div>
            {item.name}
        </div>
     
    )
}



export default Karakter;
