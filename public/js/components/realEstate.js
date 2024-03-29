webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {};
    _this.neighbourhoods = _this.neighbourhoods.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'neighbourhoods',
    value: function neighbourhoods() {
      if (this.props.globalState.populateFormsData.neighbourhoods != undefined) {
        var neighbourhoods = this.props.globalState.populateFormsData.neighbourhoods;

        return neighbourhoods.map(function (item, index) {
          return _react2.default.createElement(
            'option',
            { key: index, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'homeTypes',
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;

        return homeTypes.map(function (item, index) {
          return _react2.default.createElement(
            'option',
            { key: index, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'bedrooms',
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;

        return bedrooms.map(function (item, index) {
          return _react2.default.createElement(
            'option',
            { key: index, value: item },
            item,
            '+ bedrooms'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'h4',
          null,
          'Filter'
        ),
        _react2.default.createElement(
          'select',
          { name: 'neighbourhood', className: 'filters neighbourhood', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: 'all' },
            'Neighbourhood'
          ),
          this.neighbourhoods()
        ),
        _react2.default.createElement(
          'select',
          { name: 'homeType', className: 'filters home-type', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: 'any' },
            'Home Type'
          ),
          this.homeTypes()
        ),
        _react2.default.createElement(
          'select',
          { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
          _react2.default.createElement(
            'option',
            { value: 'any' },
            '# of bedroom'
          ),
          this.bedrooms()
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters price' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Price'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'min_price', onChange: this.props.change, value: this.props.globalState.min_price }),
          _react2.default.createElement('input', { type: 'text', name: 'max_price', onChange: this.props.change, value: this.props.globalState.max_price })
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters space' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            'Floor Space'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'min_space', onChange: this.props.change, value: this.props.globalState.min_space }),
          _react2.default.createElement('input', { type: 'text', name: 'max_space', onChange: this.props.change, value: this.props.globalState.max_space })
        ),
        _react2.default.createElement(
          'div',
          { className: 'filters extras' },
          _react2.default.createElement(
            'span',
            { className: 'title' },
            ' Extras '
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras' },
            'Elevators',
            _react2.default.createElement('input', { type: 'checkbox', value: 'elevators', name: 'elevator', onChange: this.props.change })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras' },
            'Swimming pool',
            _react2.default.createElement('input', { type: 'checkbox', value: 'swimmingPool', name: 'pool', onChange: this.props.change })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras' },
            'Finished Basement',
            _react2.default.createElement('input', { type: 'checkbox', value: 'finishedBasement', name: 'basement', onChange: this.props.change })
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'extras' },
            'Gym',
            _react2.default.createElement('input', { type: 'checkbox', value: 'gym', name: 'gym', onChange: this.props.change })
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "header",
        null,
        _react2.default.createElement(
          "div",
          { className: "logo" },
          "Logo"
        ),
        _react2.default.createElement(
          "nav",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Create ads"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "About Us"
          ),
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Login"
          ),
          _react2.default.createElement(
            "a",
            { href: "#", className: "register-btn" },
            "Register"
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(239);

var _freeSolidSvgIcons = __webpack_require__(238);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {};
    _this.listListings = _this.listListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'listListings',
    value: function listListings() {
      var listingsData = this.props.listingsData;

      if (listingsData == undefined || listingsData.length == 0) {
        return _react2.default.createElement(
          'div',
          { className: 'error' },
          'Sorry, your filter did not match any listing.'
        );
      } else {
        return listingsData.map(function (listing, index) {
          return _react2.default.createElement(
            'div',
            { className: 'listing', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
              _react2.default.createElement(
                'span',
                { className: 'address' },
                listing.address
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement('div', { className: 'user-img' }),
                _react2.default.createElement(
                  'div',
                  { className: 'user-details' },
                  _react2.default.createElement(
                    'span',
                    { className: 'user-name' },
                    'Jane Smith'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'post-date' },
                    '2019/05/05'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'listing-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'floor-space' },
                    ' ',
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSquare, className: 'fa' }),
                    ' ',
                    _react2.default.createElement(
                      'span',
                      null,
                      listing.floorSpace,
                      ' ft\xB2'
                    ),
                    ' '
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'bedrooms' },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBed, className: 'fa' }),
                    ' ',
                    _react2.default.createElement(
                      'span',
                      null,
                      listing.bedrooms,
                      ' bedrooms'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-listing-btn' },
                    'View Listing'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'rent' },
                '$',
                listing.price,
                ' / month'
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarker }),
                ' ',
                listing.neighbourhood,
                ', ',
                listing.city
              )
            )
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var listListingsClass;
      if (this.props.globalState.view == 'box') {
        listListingsClass = "col-md-3";
      } else {
        listListingsClass = "col-md-12";
      }

      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { id: 'results' },
            '390 results found'
          ),
          _react2.default.createElement(
            'div',
            { id: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', id: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faList, className: 'fa', onClick: this.props.changeView.bind(null, "list") }),
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faTh, className: 'fa', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: listListingsClass },
            this.listListings()
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              null,
              '1'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              '6'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '123 - 95 Avenue',
  neighbourhood: 'Castle Downs',
  city: 'Edmonton',
  bedrooms: 1,
  price: 850,
  floorSpace: 1850,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://cdn.pixabay.com/photo/2018/08/09/06/41/apartment-3593876_960_720.jpg'
}, {
  address: '5483 - 78 St',
  neighbourhood: 'Northgate',
  city: 'Edmonton',
  bedrooms: 2,
  price: 950,
  floorSpace: 1500,
  extras: ['gym'],
  homeType: 'Apartment',
  image: 'https://cdn.pixabay.com/photo/2018/02/12/10/07/apartment-lounge-3147892_960_720.jpg'
}, {
  address: '604 - 79 Street',
  neighbourhood: 'Southgate',
  city: 'Edmonton',
  bedrooms: 3,
  price: 1150,
  floorSpace: 1000,
  extras: ['pool', 'basement'],
  homeType: 'Townhouse',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TownHouse_Galleria_new_entrance.jpg/640px-TownHouse_Galleria_new_entrance.jpg'
}, {
  address: '7890 - 86 Street',
  neighbourhood: 'Downtown',
  city: 'Edmonton',
  bedrooms: 3,
  price: 1450,
  floorSpace: 1400,
  extras: ['pool', 'gym'],
  homeType: 'Duplex',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Duplex_house_in_Yeronga_03.2014.jpg/640px-Duplex_house_in_Yeronga_03.2014.jpg'
}, {
  address: '945 - 33 Street',
  neighbourhood: 'Northgate',
  city: 'Edmonton',
  bedrooms: 2,
  price: 1650,
  floorSpace: 1500,
  extras: ['pool', 'gym', 'basement'],
  homeType: 'Semi-detached',
  image: 'https://live.staticflickr.com/3179/2698850178_fc45097068_b.jpg'
}, {
  address: '91 - 12 Avenue',
  neighbourhood: 'Downtown',
  city: 'Edmonton',
  bedrooms: 1,
  price: 850,
  floorSpace: 2000,
  extras: ['basement', 'gym'],
  homeType: 'Semi-detached',
  image: 'https://s0.geograph.org.uk/geophotos/05/01/87/5018764_5e96cafa.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RealEstate = function (_Component) {
  _inherits(RealEstate, _Component);

  function RealEstate() {
    _classCallCheck(this, RealEstate);

    var _this = _possibleConstructorReturn(this, (RealEstate.__proto__ || Object.getPrototypeOf(RealEstate)).call(this));

    _this.state = {
      listingsData: _listingsData2.default,
      min_price: 0,
      max_price: 100000,
      min_space: 0,
      max_space: 100000,
      bedrooms: 'any',
      neighbourhood: 'all',
      homeType: 'any',
      elevator: false,
      pool: false,
      basement: false,
      gym: false,
      sortby: 'price-dsc',
      view: 'box',
      search: '',

      filteredData: _listingsData2.default,
      populateFormsData: ''
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForm = _this.populateForm.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(RealEstate, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (listing) {
        return listing.price >= _this3.state.min_price && listing.price <= _this3.state.max_price && listing.floorSpace >= _this3.state.min_space && listing.floorSpace <= _this3.state.max_space && (listing.bedrooms >= _this3.state.bedrooms || _this3.state.bedrooms == 'any') && (listing.neighbourhood == _this3.state.neighbourhood || _this3.state.neighbourhood == 'all') && (listing.homeType == _this3.state.homeType || _this3.state.homeType == 'any') && (_this3.state.gym ? listing.extras.includes('gym') : true) && (_this3.state.elevator ? listing.extras.includes('elevator') : true) && (_this3.state.pool ? listing.extras.includes('pool') : true) && (_this3.state.basement ? listing.extras.includes('basement') : true);
      });

      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      } else {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var neighbourhood = item.neighbourhood.toLowerCase();
          var homeType = item.homeType.toLowerCase();
          var extras = item.extras.toString().toLowerCase();
          var address = item.address.toLowerCase();

          var searchText = _this3.state.search.toLowerCase();

          return neighbourhood.match(searchText) != null || homeType.match(searchText) != null || extras.match(searchText) != null || address.match(searchText) != null;
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForm',
    value: function populateForm() {
      // Neighbourhood
      var neighbourhoods = this.state.listingsData.map(function (item) {
        return item.neighbourhood;
      });
      neighbourhoods = new Set(neighbourhoods);
      neighbourhoods = [].concat(_toConsumableArray(neighbourhoods)).sort();

      // Home Type
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes)).sort();

      // Bedrooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.bedrooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms)).sort();

      this.setState({
        populateFormsData: {
          neighbourhoods: neighbourhoods,
          homeTypes: homeTypes,
          bedrooms: bedrooms
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForm }),
          _react2.default.createElement(_Listings2.default, { change: this.change, globalState: this.state, listingsData: this.state.filteredData, changeView: this.changeView })
        ),
        _react2.default.createElement('div', { className: 'footer' })
      );
    }
  }]);

  return RealEstate;
}(_react.Component);

var app = document.getElementById('app');
_reactDom2.default.render(_react2.default.createElement(RealEstate, null), app);

/***/ })

},[240]);