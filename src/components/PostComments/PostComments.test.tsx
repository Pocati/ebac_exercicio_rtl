import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';
import PostComments from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

describe('Teste para o componente PostComments', () => {

    describe('Teste para o componente PostComments', () => {
        it('Deve adicionar dois comentários na lista', () => {
            render(<PostComments />);

            const input = screen.getByTestId('comment-input');
            const button = screen.getByTestId('comment-button');

            fireEvent.change(input, { target: { value: 'Fazer o primeiro comentário' } });
            fireEvent.click(button);

            fireEvent.change(input, { target: { value: 'Fazer o segundo comentário' } });
            fireEvent.click(button);

            expect(screen.getByText('Fazer o primeiro comentário')).toBeInTheDocument();
            expect(screen.getByText('Fazer o segundo comentário')).toBeInTheDocument();
        });
    })
});