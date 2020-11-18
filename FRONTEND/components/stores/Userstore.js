import { extendObservable } from 'mobx';
class UserStore{
    constructor(){
        extendObservable(this,{
            loading         :true,
            isLoggedIn      :false,
            showlogin       : false,
            showproducts    :false,
            showcart        :false,
            showcheckout    :false,
            showPreview     :false,
            Liked           :false,
            previewimage    :'',
            previewname     :'',
            previewprize    :'',
            username        :'',
            alternateprize  :'',
            checkoutprize   :0
        })
    }
}
export default new UserStore();