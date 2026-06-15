---
title: 使用C#读取,写入JSON文件
published: 2025-10-15
description: 'JSON文件读取写入'
image: ''
tags: ["CSharp", "JSON"] 
category: 'CSharp'
draft: false 
lang: ''
pinned: false
author: Mikuas
---

## 写入Json文件

```csharp

// 定义数据
public class Item
{
    // Json 注解
    [JsonPropertyName("user_name")]
    public string Name { get; set; }
    
    [JsonPropertyName("age")]
    public int Age { get; set; }
    
    [JsonPropertyName("using_skills")] // JSON 里为 using_skills
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)] // 条件忽略, 为Null忽略
    public List<string>? Skills { get; set; }
}

public static void Main(string[] args)
{
    string path = @"C:\Projects\C#\ConsoleTest\ConsoleTest";

    var item = new Item
    {
        Name = "ZhangSan",
        Age = 24,
        Skills = new List<string> { "CSharp", "XAML" }
    };

    var items = new List<Item>
    {
        item,
        new Item
        {
            Name = "ZhangSan",
            Age = 24,
            Skills = null,
        }
    };

    var options = new JsonSerializerOptions
    {
        WriteIndented = true // 配置缩进
    };
    
    // 转为json字符串
    string json = JsonSerializer.Serialize(items, options);
    
    // 写入
    File.WriteAllText(Path.Combine(path, "demo.json"), json);
}
```


### 读取Json文件
```csharp
// 读取json文件,反序列化
json = File.ReadAllText(Path.Combine(path, "demo.json"));
List<Item>? newItem = JsonSerializer.Deserialize<List<Item>>(json);
if (newItem == null) { return; }

foreach (var itm in newItem)
{
    Console.WriteLine(itm.Name);
    Console.WriteLine(itm.Age);
    Console.WriteLine(itm.Skills);
}
```


* 上述的写入读取,在`Aot`模式下因使用了反射从而无法写入文件,所以要使用源生成器来进行写入
```csharp
// 定义数据模型
public class Data 
{
    public string Name { get; set; }
    public int Age { get; set; }
    ...
}


[JsonSerializable(typeof(Data))] // 指定类型
[JsonSourceGenerationOptions(WriteIndented = true)] // 缩进写入
internal partial class AppJsonContext : JsonSerializerContext
{
}


// 写入
var data = new Data();
string json = Jsonserializer.Serialize(data, AppJsonContext.Default.Data)
File.WriteAllText(path, json);
```