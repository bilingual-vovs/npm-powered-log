# **powered-log**  

### **Many log usefull functions and growing functionality**

**Powered-log** - is a modern util to make you logs more readalble. Using it you can make log **colored** or **set writing directories** for diferent types of logs.
## Links 

#### [Main documentation](./docs/Doc.md)  
#### [GitHub repository](https://github.com/bilingual-vovs/npm-powered-log.git)

--------

[![Git Hub](./img/imgonline-com-ua-Resize-adLzSWUGyRD.png)](https://github.com/bilingual-vovs/npm-powered-log.git)[![Main doc](./img/imgonline-com-ua-Resize-YUCfUjM0Yd2fRRh.png)](./docs/Doc.md)

--------

## **Navigation**
* [Package setting up](#package-setting-up)
* [Log coloring](#log-coloring)
* [Flexible directed loging](#flexible-directed-logging) 
* [Advanced `log`, `warn`, `error`](#advanced-log-warn-error)
    * [`log`](#log)
    * [`warn`](#warn)
    * [`error`](#error--err)
* [Visualization methods](#visualization-methods)


## **Package setting up**
In our documentation we will change original console object to our's, so our input will look like  this:   

    const console = require("powered-log")

## **Log coloring**
To make colored log and masages at all we use, color names that included in [styles.md](./docs/styles.md). You need to set them as a param type string after fuction arguments list, you can set as meny styles and colors as you want. 
#### Something like this:

        conosole.log("Hello powere-log", "red", "unDerScrOrE")

## Flexible directed logging
Our package alows you to use save all your logs in some files. You can set for your log text many writing directories. They must be type string and you can set them as many is you want.
**Remember - colors won't be saved**

#### For example:

        console.log("Hey write me to dir", "red", "./logs/app.log", "./logs/fun.log")
        console.err("Wrong input", "./log/err.log")

## **Advanced `log`, `warn`, `error`:**
### **`log`**
> Our interpretation of **log** function alows you to make your log with some **styles** ([look at styles.md](./docs/styles.md)) and **set** many **writing directories**
> #### **Syntax**
> 
>     console.log(yourText, ...theArgs)
> 
>> **Where** 
>> * `yourText` - text to log *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this log text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
> #### **This func don't have output**  
>  
> **P.S -** you should use this function to write some messages in terminal or console and save them to directories, but we recomend to use another function in our packadge. You can find more at [doc.md](./docs/Doc.md#log)

### **`warn`**
> Our interpretation of **warn** function alows you to make your warn with some **styles** ([look at styles.md](./docs/styles.md)) and **set** many **writing directories**, defoutly warning withdrawing in yellow color, so you won't miss it. 
> #### **Syntax**
> 
>     console.warn(yourText, ...theArgs)
> 
>> **Where** 
>> * `yourText` - text to warn *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this warn text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
> #### **This func don't have output**  
>  

### **`error` / `err`**
> Our interpretation of **error** function alows you to withdraw error with some **styles** ([look at styles.md](./docs/styles.md)) and **set** many **writing directories**, defoultly withdrawing in red color, so you won't miss it. 
> #### **Syntax**
> 
>     console.error(yourText, ...theArgs)
> 
> or
> 
>     console.err(yourText, ...theArgs)
> 
>> **Where** 
>> * `yourText` - text for error *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this log text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
> #### **This func don't have output**  
>  


## Visualization methods
To visualisate data in diferent types we have own custum and colored methods, so we recomend to use them.

### **`number`/`num`**
> Function that logs colored number, logging number in cyan color, not very usefull.
> #### **Syntax**
> 
>     console.number(yourText, ...theArgs)
> 
> or
> 
>     console.num(yourText, ...theArgs)
> 
>> **Where** 
>> * `yourText` - text to log *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this log text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
> #### **This func don't have output**  
>  


### **`string`/`str`**
> Function that logs colored string, logging string in green color and in '', not very usefull.
> #### **Syntax**
> 
>     console.string(yourText, ...theArgs)
> 
> or
> 
>     console.str(yourText, ...theArgs)
> 
>> **Where** 
>> * `yourText` - text to log *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this log text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
> #### **This func don't have output**  


### **`boolean`/`bool`**
> Function that logs colored boolean, logging boolean in res color, not very usefull.
> #### **Syntax**
> 
>     console.boolean(yourText, ...theArgs)
> 
> or
> 
>     console.bool(yourText, ...theArgs)
> 
>> **Where** 
>> * `yourText` - text to log *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this log text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
> #### **This func don't have output**  

### **`array`/`arr`**
> Function that logs colored array, logging decorated array, not very usefull.
> #### **Syntax**
> 
>     console.array(yourText, ...theArgs)
> 
> or
> 
>     console.arr(yourText, ...theArgs)
> 
>> **Where** 
>> * `yourText` - text to log *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this log text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
> #### **This func don't have output**  


### **`object`/`obj`**
> Function that logs colored object, logging decorated object, not very usefull.
> #### **Syntax**
> 
>     console.object(yourText, ...theArgs)
> 
> or
> 
>     console.obj(yourText, ...theArgs)
> 
>> **Where** 
>> * `yourText` - text to log *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this log text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
> #### **This func don't have output**  

