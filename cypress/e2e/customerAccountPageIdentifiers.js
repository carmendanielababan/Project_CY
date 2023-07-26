class CustomerAccountIdentifiers {
    // Selectors for Logon page 
    customerAccountBtn = '#customer-account > div > i'
    emailAddressField = '#email'
    passwordField = '#password'
    loginBtn = '#pizokel_customer_submit'
    myAccountArea = ':nth-child(4) > .row'
    faildLoginMessage = '#loginform > div.form-group.email-input-field.hasError > div'

    //Selectors for Voucher page
    giftCard = '.my-account-navigation > :nth-child(10) > a'
    buyGiftCardBtn = '.vouchers-list__header-action > .btn'
    giftCardValue = ':nth-child(1) > .gift-cards__container-list-item-label'
    destinatarName = '#name'
    destinatarEmail = '#email'
    destinatarConfirmEmail = '#email-confirm'
    senderName = '#sender'
    giftMessage = ':nth-child(2) > :nth-child(3) > .gift-cards__form-group-input'
    buyCardBtn = ':nth-child(4) > .btn'

    // Selector for baschet page
    deletebtn = '.cart-product-remove'
    emptyBaschetmessage = '.empty-cart > .row > .col-xs-12 > h3'
    baschetBtn = '#customer-basket'
    baschetItemsContainer = '#full-site-canvas'

    searchBtn = '#mobile-search'
    searchInput = '#search-input'
    searchContainer = '#search-container__results'
    productImage = 'span.campaign-photo > img:nth-child(1)'
    addToFavorite = '.col-fav > .add-wishlist-box'
    favoriteNotification = '#fav-notification'

    favoriteBtn = '#wishlist-top-menu'
    favoriteList = '#itemlist'
    deleteFavorite = '.wishlist-product-actions > .submit'
    emptyFavoriteListMsg = '.inner-white-box > .row > .col-xs-12 > span'


    outletSection = '.main-menu__nav > :nth-child(8) > :nth-child(1)'
    popover = '.main-menu__nav > li:nth-child(8) > div:nth-child(2)'
    article50100 = '.main-menu__nav li:nth-of-type(8) [data-item-type="8"]:nth-child(20) .main-menu__item-child__title'
    bijuterii = '#categoryOpt_207__JEWELS__2__ACCESSORIES > a > span.filter-icon'
    silver = '#f_1_7598Opt_90986 > .filter-link > .filter-icon'
    materialSection = '#f_1_7598FilterOptions'
    filterDropDown = '.filterDrop'
    lowerPrice = ':nth-child(2) > .filterSelector'
    materialArea = '#f_1_7598FilterOptions > .filter-title'
    productDetails = '#product_details'
    

    addresses = '#full-site-canvas > div:nth-child(5) > div > div.col-md-3.col-xs-12.leftside-navigation > ul > li:nth-child(9) > a'
    addAddress = '#reactRoot > div > div:nth-child(2) > div > a > span'
    fullName = '.delivery-full-name > .text-field'
    phoneNumber = '.delivery-phone-number > .text-field'
    judet = '#editContainer > div:nth-child(3) > div:nth-child(1) > div'
    jutedField = '.Select-value'
    city = '#editContainer > div:nth-child(3) > div:nth-child(2) > div'
    addressField = '#editContainer .row:nth-child(3) [type="text"]'
    additionalInfo = '.delivery-add-info > .text-field'
    saveAddress = '#editContainer > div.submit-area > div.submit-btn-container.clearfix > a:nth-child(1)'
    addressDetails = '.account-addresses'
    deleteAddress = '.delete-btn > .transText'
    confirmDeleteAddress = '.modal-footer > :nth-child(2) > .transText'

    woman = '.nav > :nth-child(1) > .active'
    brandSection = ':nth-child(9) > span[style=""]'
    popoverBrands = '.main-menu__nav div:nth-of-type(2) [data-item-type="3"]:nth-child(4)'
    furla = ':nth-child(5) > [href="/g/furla"] > .main-menu__item-child__title'
    biggerPrice = ':nth-child(3) > .filterSelector'
    firstProduct = 'a > span.campaign-photo > img:nth-child(2)'
    buyBox = '#buy-box'
    brandName = '.brand-name'

    FashionDaysLogo = '#logo-link > span.hidden-xs.visible-sm.visible-md.visible-lg.logo-header-desktop > img'


}

export default CustomerAccountIdentifiers
    
