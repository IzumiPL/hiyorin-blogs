---
title: "禁止控件请求BringIntoView事件"
published: 2026-06-15
draft: false 
---

```csharp
禁止控件请求BringIntoView事件

AddHandler(RequestBringIntoViewEvent, (_, e) => { e.Handled = true; })

```