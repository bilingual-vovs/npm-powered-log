# npm-powered-log 

## **Base**

## **Functions**

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

### **`count`**
> **Count** logging a text with standart and adding number of times this text was logged by count
> #### **Syntax**
> 
>     console.count(yourText, ...theArgs)
> 
>> **Where** 
>> * `yourText` - text to log with count *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this log text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
> #### **This func don't have output**  
>  

### **Styles** 
> For every style in [styles.md](./styles.md) is a function with the same name as a style name, but in lower case 
> #### **Syntax**
>
>       console.nameOfStyle(text, ...theArgs) // don't use capital latters in name of function 
>
>> **Where** 
>> * `yourText` - text to log *(type : string)*
>> * `theArgs`:
>>   * **style** - one of styles in [style.md](./docs/styles.md) *(type : string)* *(you can add as many styles as you want, **isn't case insensitive**)*
>>   * **dir** - every directory to write this log text *(type : string)* *(you can add as many dirs as you want, **isn't case insensitive**)*
>
> #### **This func don't have output**  

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


### **`object`/`str`**
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
>  