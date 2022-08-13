import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectProductById } from '../features/products/ProductsSlice';
import ProductDetail from '../features/products/ProductDetail';
import ProductsList from '../features/products/ProductsList';
import SubHeader from '../components/SubHeader';
import Error from '../components/Error';
import Loading from '../components/Loading';



const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));
    console.log('product:', product);

    const isLoading = useSelector((state) => state.products.isLoading);
    const errMsg = useSelector((state) => state.products.errMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error errMsg={errMsg} />;
    } else {
        content = (
            <>
                <ProductDetail product={product} />
                <ProductsList productId={productId} />
            </>
        );
    }
    
    return (
        <Container>
            {product && <SubHeader current={product.name} detail={true} />}
            <Row>
                {content}
            </Row>
        </Container>
    );
};

export default ProductDetailPage;