import getFirebase from '../../lib/firebase';

export const promotionActionTypes = {
    GET_PROMOTIONS: 'GET_PROMOTIONS'
}

export const promotionActions = {
    getPromotions: () => (dispatch, getState) => {
        const { db } = getFirebase();
        db.collection('promotion').onSnapshot((snapshot) => {
            let arr = [];
            snapshot.forEach((res) => {
                arr.push(res.data());
            });
            dispatch({ type: promotionActionTypes.GET_PROMOTIONS, payload: [...arr] })
        })
    },
    addPromotion: (data) => (dispatch, getState) => {
        const { db } = getFirebase();
        db.collection('promotion').add(data)
        dispatch({ type: promotionActionTypes.GET_PROMOTIONS, payload: [...getState().Promotion.promotions, data] });
    }
}