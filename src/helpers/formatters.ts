import * as u from '@helpers/utils';

export const formatPrice = (price: string|number) => u.toFloat(price).toFixed(2);


