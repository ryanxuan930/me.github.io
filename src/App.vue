<template>
    <div id="container">
        <div id="navbar">
            <router-link to="/">Home</router-link>
            <router-link to="/skills">Skills</router-link>
            <router-link to="/experience">Experience</router-link>
            <router-link to="/works">Works</router-link>
        </div>
        <router-view></router-view>
    </div>
    
</template>
<style lang="less">
@main-black: #242424;
@main-blue: rgb(0,122,255);
* {
    margin: 0;
}
#app {
    font-family: 'Poppins', sans-serif;
	margin: 0;
	color: @main-black;
}
#container {
    width: 900px;
    margin: auto;
    box-sizing: border-box;
    @media screen and (max-width: 1000px){
        margin: 0 20px;
        width: auto;
    }
}
#navbar {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    a {
        margin-right: 20px;
        text-align: center;
        display: block;
        font-size: 14pt;
        text-decoration: none;
        color: #353535;
        border-bottom: 3px #FFFFFF solid;
        &:hover {
            border-bottom: 3px rgb(10,132,255) solid;
            transition-duration: 0.3s;
        }
        &.router-link-exact-active {
            border-bottom: 3px @main-blue solid;
        }
    }
}
</style>