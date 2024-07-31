import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import useFetchOrdersAndProducts from '../../hooks/useFetchOrdersAndProducts';

function TestComponent() {
    const {
        ordersStatus,
        ordersError,
        productsStatus,
        productsError
    } = useFetchOrdersAndProducts();

    return (
        <div>
            <div data-testid="orders-status">
                {ordersStatus === 'succeeded' ? 'Orders Loaded' : 'Loading Orders'}
            </div>
            <div data-testid="products-status">
                {productsStatus === 'succeeded' ? 'Products Loaded' : 'Loading Products'}
            </div>
            <div data-testid="orders-error">
                {ordersError ? `Error: ${ordersError}` : 'No Orders Error'}
            </div>
            <div data-testid="products-error">
                {productsError ? `Error: ${productsError}` : 'No Products Error'}
            </div>
        </div>
    );
}

describe('useFetchOrdersAndProducts', () => {
    it('should fetch orders and products', async () => {
        render(<TestComponent />);

        await waitFor(() => {
            expect(screen.getByTestId('orders-status')).toHaveTextContent('Orders Loaded');
            expect(screen.getByTestId('products-status')).toHaveTextContent('Products Loaded');
            expect(screen.getByTestId('orders-error')).toHaveTextContent('No Orders Error');
            expect(screen.getByTestId('products-error')).toHaveTextContent('No Products Error');
        });
    });
});
