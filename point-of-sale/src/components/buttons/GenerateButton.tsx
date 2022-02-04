import React, { FC } from 'react';
import AwesomeButton from 'react-awesome-button';
import { usePayment } from '../../hooks/usePayment';
import * as css from './GenerateButton.module.pcss';

export const GenerateButton: FC = () => {
    const { amount, generate } = usePayment();

    return (
        <div>
        <button
            className={css.root}
            type="button"
            onClick={generate}
            disabled={!amount || amount.isLessThanOrEqualTo(0)}
            >
            Finish and Pay
        </button>
        <hr />
    </div>
    );
};
