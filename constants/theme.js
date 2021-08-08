

export const COLORS = {
    primary : "#FC6D3F",
    secondary: "#CDCDD2",
}
export const SIZES = {
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    //font size

    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,
}

export default {COLORS, SIZES};
//Clear watchman watches: watchman watch-del-all
//2. Delete node_modules and run yarn install
//3. Reset Metro's cache: yarn start --reset-cache
//4. Remove the cache: rm -rf /tmp/metro-*