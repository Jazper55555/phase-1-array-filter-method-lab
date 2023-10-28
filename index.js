function findMatching(drivers, name) {
    const matchingDrivers = drivers.filter(driver => {
      return driver.toLowerCase() === name.toLowerCase();
    });
    return matchingDrivers;
  }

function fuzzyMatch(drivers, string) {
    const matchingDrivers = drivers.filter(driver => driver.startsWith(string));
    return matchingDrivers
}


function matchName(drivers, name) {
    const matchingDrivers = drivers.filter(driver => driver.name === name);
        return matchingDrivers
    }
