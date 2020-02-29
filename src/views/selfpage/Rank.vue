<template>
    <div class="rank">
        <div class="myRank">
            <p>我的积分：66666分</p>
            <p>积分排名：2333名</p>
        </div>
        <div class="totalRank">
            <table>
                <caption>排行榜</caption>
                <tbody>
                    <tr class="firstTr">
                        <th class="th1">名次</th>
                        <th class="th2">用户名</th>
                        <th class="th3">积分</th>
                    </tr>
                    <tr>
                       <td>第一名</td> 
                       <td>计算机科学与技术</td>
                       <td>66666</td>
                    </tr>
                    <tr>
                        <td>第二名</td>
                        <td>山大百事通</td>
                        <td>3523</td>
                    </tr>
                    <tr>
                        <td>第三名</td>
                        <td>李白部分穷播放器</td>
                        <td>934</td>
                    </tr>
                    <tr>
                        <td>第三名</td>
                        <td>李白部分穷播放器</td>
                        <td>934</td>
                    </tr>
                    <tr>
                        <td>第三名</td>
                        <td>李白部分穷播放器</td>
                        <td>934</td>
                    </tr>
                    <tr>
                        <td>第三名</td>
                        <td>李白部分穷播放器</td>
                        <td>934</td>
                    </tr>
                    <tr>
                        <td>第三名</td>
                        <td>李白部分穷播放器</td>
                        <td>934</td>
                    </tr>
                    <tr>
                        <td>第三名</td>
                        <td>李白部分穷播放器</td>
                        <td>934</td>
                    </tr>
                    <tr>
                        <td>第三名</td>
                        <td>李白部分穷播放器</td>
                        <td>934</td>
                    </tr>
                    <tr>
                        <td>第三名</td>
                        <td>李白部分穷播放器</td>
                        <td>934</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Rank'
}
</script>

<style scoped>
.myRank {
    height: 8vw;
    width:90%;
    margin:auto;
    margin-top: 5vw;
    color:black;
}
.myRank p {
    width: 100%;
    height: 20%;
    font-size: 1.5vw;
}
.totalRank {
    color:black;
   margin-top:6vw;
   border-top:1px solid #bcb397;
}
table {
    width:100%;
    font-size: 1.5vw;
    /* display:flex; */
}
caption {
    /* grid-area: 1 / 1 / 2 / 4; */
    padding-bottom: .5vw;
    padding-top: .5vw;
    border-bottom: 1px solid #bcb397;
}
tr  {
    height:5vw;
}
tr td {
    text-align: center;
}
.th1 {
    width:20%;
    text-align: center;
    /* grid-area: 2 / 1 / 6 / 2; */
}
.th2 {
    /* grid-area: 2 / 2 / 6 / 3; */
}
.th3 {
    /* grid-area: 2 / 3 / 6 / 4; */
}
</style>