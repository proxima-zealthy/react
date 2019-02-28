import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import 'SubTopicNavigation.scss';

const list = [
  {name: 'item1'},
  {name: 'item2'},
  {name: 'item3'},
  {name: 'item4'},
  {name: 'item5'},
  {name: 'item6'},
  {name: 'item7'},
  {name: 'item8'},
  {name: 'item9'}

];

// eslint-disable-next-line react/prop-types
const MenuItem = ({text, selected}) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>;
};

export const Menu = list =>
  list.map(el => {
    const {name} = el;

    return <MenuItem text={name} key={name} />;
  });

const Arrow = ({text, className}) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export const ArrowLeft = Arrow({text: '<', className: 'arrow-prev'});
export const ArrowRight = Arrow({text: '>', className: 'arrow-next'});

export default class SubTopicNavigation extends Component {
  state = {
    alignCenter: false,
    clickWhenDrag: false,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    selected: 'item1',
    translate: null,
    transition: 0.4,
    wheel: true,
    showList: true,
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  componentDidUpdate(prevProps, prevState) {
    const {alignCenter} = prevState;
    const {alignCenter: alignCenterNew} = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
      this.menu.forceUpdate();
      this.forceUpdate();
    }
  }

  onUpdate = ({translate}) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({translate});
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({selected: key});
  };

  setItemsCount = ev => {
    const {itemsCount = list.length, selected} = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew,
      });
    }
  };

  setSelected = ev => {
    const {value} = ev.target;
    this.setState({selected: String(value)});
  };

  toggle = () => {
    this.setState({ showList: !this.state.showList });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      selected,
      translate,
      transition,
      wheel,
      showList,
    } = this.state;

    const menu = this.menuItems;

    return (
      <div style={{margin:'auto'}} >

        {/*<button onClick={this.toggle}>Toggle Show/hide</button> arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}*/}

        { showList && (
          <ScrollMenu
            ref={el => (this.menu = el)}
            data={menu}

            hideArrows={hideArrows}
            hideSingleArrow={hideSingleArrow}
            transition={+transition}
            onUpdate={this.onUpdate}
            onSelect={this.onSelect}
            scrollToSelected={true}
            selected={selected}
            translate={translate}
            alignCenter={alignCenter}
            dragging={dragging}
            clickWhenDrag={clickWhenDrag}
            wheel={wheel}
          />
        )}

        <hr />
        <div>

        </div>
      </div>
    );
  }
}
