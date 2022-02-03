<div class="container">
    <div class="box">
        <div class="div title">Data Changes</div>
        <div class="div">
            <div class="circle"></div>
            <div class="text">
                <div class="gray">Pending for action<span>10</span></div>
                <div class="yellow">Under review <span>22</span></div>
                <div class="green">Reviewed <span>55</span></div>
            </div>
        </div>
    </div>
</div>
<style>
    .container {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }
    .box {
        width: 300px;
        display: inline-block;
        border: 1px solid #888;
        border-radius: 5px;
        padding: 20px;
    }
    .box:hover {
        border: 1px solid blue;
    }
    .div {
        position: relative;
        width: 100%;
        float: left;
    }
    .title {
        font-size: 20px;
        margin-bottom: 20px;
    }
    .circle {
        width: 80px;
        height: 80px;
        border: 10px solid;
        border-radius: 50%;
        float: left;
    }
    .text {
        width: calc(100% - 120px);
        float: right;
        margin-top: 10px;
    }
    .text > div {
        margin-bottom: 10px;
        font-size: 16px;
        color: #333;
        position: relative;
        padding-right: 50px
    }
    .text > div span {
        position: absolute;
        right: 0;
    }
    .gray span {
        color: #555;
    }
    .yellow span {
        color: #f1cd0f;
    }
    .green span {
        color: #09a209
    }
</style>
