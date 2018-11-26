import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;
`;
// export const Logo = styled.a.attrs({
//     href: './'
// })`
export const Logo = styled.div`
    position:absolute;
    display:block;
    left:0;
    top:0;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    height:100%;
    max-width:960px;
    margin:0 auto;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const NavSearchWrapper = styled.div`
    position:relative;
    height:38px;
    margin-top:9px;
    float:left;
    width:160px;
    margin-left:20px;
    &.slide-enter{
        width:160px;
    }
    &.slide-enter-active{
        width:220px;
        .Aa{
            background:#ccc;
        }
        transition:all 0.3s ease-in;
    }
    &.slide-enter-done{
        width:220px;
        .Aa{
            background:#ccc;
        }
    }
    &.slide-exit{
        width:220px;
        .Aa{
            background:#ccc;
        }
    }
    &.slide-exit-active{
        width:160px;
        transition:all 0.3s ease-in;
    }
    &.slide-exit-done{
        width:160px;
    }
    .Aa{
        position:absolute;
        right:4px;
        top:4px;
        width:30px;
        line-height:30px;
        text-align:center;
        border-radius:50%;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
   width:100%;
   height:100%;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    padding:0 20px;
    padding-right:28px;
    box-sizing:border-box;
    font-size:14px;
    
    &::placeholder{
        color:#999;
    }
`
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    cursor:pointer;
    &.reg{
        color:#ec6149;
    }
    &.writing{
        color:#FFF;
        background:#ec6149;
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    background:#FFF;
    z-index:2;
    left:0;
    top:50px;
    width:240px;
    padding:0 20px 10px;
    height:auto;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    .title{
        margin-top:10px;
        margin-bottom:10px;
        width:100px;
        display:inline-block;
    }
    ul{
        display:flex;
        flex-wrap: wrap;
        li{
            flex:0 0 auto;
            border:1px solid #ccc;
            margin-right:5px;
            margin-bottom:5px;
            font-size:10px;
            border-radius:2px;
            padding:3px;
        }
    }
    .spin{
        float: right;
        margin-right: 5px;
        margin-top: 10px;
        line-height: 22px;
        transition:all 0.3s ease-in;
        transform-origin:center center;
    }
    button{
        float:right;
        margin-top:10px;
    }
`