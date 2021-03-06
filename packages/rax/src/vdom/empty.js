import Host from './host';
import BaseComponent from './base';

/**
 * Empty Component
 */
class EmptyComponent extends BaseComponent {
  createNativeNode() {
    return Host.driver.createEmpty();
  }
}

export default EmptyComponent;
