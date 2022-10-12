<template>
    <div class="content">
        <h2>Coding</h2>
        <div class="context">
            <ul>
                <li>Vue 3 / TypeScript / JavaScript</li>
                <li>Tailwind CSS / SCSS</li>
                <li>Laravel / PHP / SQL</li>
                <li>Python / Selenium</li>
            </ul>
        </div>
        <h2>Sports</h2>
        <div class="context">
            <ul>
                <li>5000m - 16:21</li>
                <li>10000m - 35:42</li>
                <li>Half marathon - 1:78:35</li>
                <li>Former HSNU Athletic Team Long-distance runner</li>
                <li>NSYSU Athletics Captain and Long-distance runner</li>
            </ul>
        </div>
        <h2>Music</h2>
        <div class="context">
            <ul>
                <li>Composition</li>
                <li>Percussion</li>
            </ul>
        </div>
        <h2>Others</h2>
        <div class="context">
            <ul>
                <li>Arduino</li>
                <li>Illustrator / Photoshop</li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
h2 {
    font-size: 24pt;
    margin-bottom: 10px;
    @media screen and (max-width: 1000px){
        font-size: 20pt;
    }
}
.context {
    font-size: 18pt;
    margin-bottom: 20px;
    @media screen and (max-width: 1000px){
        font-size: 14pt;
    }
}
</style>