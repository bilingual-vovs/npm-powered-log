# **powered-log**  

### **Many log usefull functions and growing functionality**

**Powered-log** - is a modern util to make you logs more readalble. Using it you can make log **colored** or **set writing directories** for diferent types of logs.

-----

## **Navigation**
* [Package setting up](#package-setting-up)
* Log coloring
* [Advanced log, warn, error](#advanced-log-warn-error)
* Visualization methods
* Flexible directed loging 
* Contacts

## **Package setting up**
In our documentation we will change original console object to our's, so our input will look like  this:   

    const console = require("powered-log")

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