var api = 'http://explorer.lines.pw/API';
var blockTargetInterval = 120.0;
var coinUnits = 10000000;
var symbol = 'LNS';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "lns": [
        ["pool.lines.pw", "https://pool.lines.pw/API"],
        ["cryptoknight.cc/lines", "http://94.130.207.37:40004"],
        ["lines.fatpanda.club", "http://54.148.101.99:8016"],
        ["youpool.io/LNS/", "http://118.178.122.224:8110"],
        ["lines.hpool.net", "http://server1.chinanorth.cloudapp.chinacloudapi.cn:18702"],
        ["lns.euminingpool.com", "http://lns.euminingpool.com:15016"],
        ["pool.criptolearn.net/lines/", "http://pool.criptolearn.net:8118"],
        ["kenta.online", "http://172.104.145.18:8117"],
        ["miningpool365.com/lines/", "http://miningpool365.com:8118"],
        ["lnspool.partyvibe.com", "http://lnspool.partyvibe.com:8118"],
        ["lns-us.crypt29.net", "https://lns-us.crypt29.net/lns-api/"],
        ["superblockchain.con-ip.com/lines/", "http://superblockchain.con-ip.com:8045"],
        ["lns.go-mine.it", "http://lns.go-mine.it:8001"],
        ["lines.clevery.xyz", "https://lines.clevery.xyz/api"]
    ]
};
