class BroadbandConnection {
  constructor(num) {
    this.switchOff = num;
    this.connectedComputers = {};
  }

  switchOn() {
    if (this.switchOff) {
      this.switchOff = false;
      return 'Switching on the Broadband';
    }
    return 'Broadband already switched on, please connect.';
  }

  connect(name, num) {
    if (this.num <= 0 || this.num > 1) {
      return 'Please connect to the Broadband to surf the internet';
    } else if (this.num === 1) {
      const connected = 'You are connected. Welcome to the Swift Broadband internet connection';
      this.connectedComputers[this.name] = connected;
      return this.connectedComputers;
    }
  }

  shareConnection(shareConnect, laptopDriver) {
    /* let shareWifi = false;
    let laptopWifi = false; */

    if (!laptopDriver) {
      return 'You cannot share this Broadband Connection because you have no Wifi driver';
    } else if (this.laptopDriver && this.shareConnect === false) {
      return 'Please share Broadband connection this connection.';
    } else if (this.shareConnect && this.laptopDriver) {
      return 'You can share the Broadbands Connection through the Wifi.';
    }
  }
}

class ShareBroadband extends BroadbandConnection {
  constructor(num, connectedComputers) {
    super(num, connectedComputers);
    this.connectedComputers = {};
  }
}


export default {
  BroadbandConnection,
  ShareBroadband,
};
