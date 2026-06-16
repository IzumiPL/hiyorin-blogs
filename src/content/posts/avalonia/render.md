---
title: 在Avalonia添加动画效果
published: 2026-05-13
description: '自定义绘制'
image: ''
tags: ["Avalonia", "CSharp", "Render"] 
category: 'Avalonia'
draft: true
lang: ''
pinned: false
author: Mikuas
---

# Avalonia DrawingContext 绘制能力

## 基础图形

### 直线

```csharp
context.DrawLine(pen, p1, p2);
```

### 矩形

```csharp
context.DrawRectangle(brush, pen, rect);
```

### 圆角矩形

```csharp
context.DrawRectangle(
    brush,
    pen,
    new RoundedRect(rect, radius));
```

### 椭圆

```csharp
context.DrawEllipse(
    brush,
    pen,
    center,
    radiusX,
    radiusY);
```

### 圆形

```csharp
context.DrawEllipse(
    brush,
    pen,
    center,
    radius,
    radius);
```

---

## 几何图形

### StreamGeometry

```csharp
context.DrawGeometry(
    brush,
    pen,
    geometry);
```

支持：

- 多边形
- 三角形
- 五角星
- 贝塞尔曲线
- SVG Path
- 任意闭合图形

### PathGeometry

```csharp
context.DrawGeometry(
    brush,
    pen,
    pathGeometry);
```

---

## 图像

### Bitmap

```csharp
context.DrawImage(
    bitmap,
    sourceRect,
    destRect);
```

### CroppedBitmap

```csharp
context.DrawImage(
    croppedBitmap,
    sourceRect,
    destRect);
```

---

## 文本

### FormattedText

```csharp
context.DrawText(
    text,
    point);
```

支持：

- 字体
- 字重
- 字号
- 行高
- 对齐
- 换行

---

# DrawingContext Push 系列

## 裁剪

```csharp
using(context.PushClip(rect))
{
}
```

---

## 圆角裁剪

```csharp
using(context.PushClip(geometry))
{
}
```

---

## 透明度

```csharp
using(context.PushOpacity(0.5))
{
}
```

---

## 不透明度遮罩

```csharp
using(context.PushOpacityMask(maskBrush))
{
}
```

---

## 变换

```csharp
using(context.PushTransform(matrix))
{
}
```

支持：

- 平移
- 缩放
- 旋转
- 倾斜

---

## RenderOptions

```csharp
using(context.PushRenderOptions(options))
{
}
```

---

# Brush

## SolidColorBrush

```csharp
new SolidColorBrush(color);
```

---

## LinearGradientBrush

```csharp
new LinearGradientBrush
{
    GradientStops =
    {
        ...
    }
};
```

---

## RadialGradientBrush

```csharp
new RadialGradientBrush
{
    GradientStops =
    {
        ...
    }
};
```

---

## ImageBrush

```csharp
new ImageBrush(bitmap);
```

---

## DrawingBrush

```csharp
new DrawingBrush();
```

---

# Pen

## 普通画笔

```csharp
new Pen(brush, thickness);
```

---

## 虚线

```csharp
new Pen(
    brush,
    thickness,
    dashStyle: new DashStyle(
        new[] {4d,2d},
        0));
```

---

## 圆头线

```csharp
new Pen
{
    LineCap = PenLineCap.Round
};
```

---

## 方头线

```csharp
new Pen
{
    LineCap = PenLineCap.Square
};
```

---

## 圆角连接

```csharp
new Pen
{
    LineJoin = PenLineJoin.Round
};
```

---

# Geometry

## LineGeometry

```csharp
new LineGeometry();
```

---

## RectangleGeometry

```csharp
new RectangleGeometry();
```

---

## EllipseGeometry

```csharp
new EllipseGeometry();
```

---

## StreamGeometry

```csharp
new StreamGeometry();
```

---

## PathGeometry

```csharp
new PathGeometry();
```

---

## CombinedGeometry

```csharp
Geometry.Combine(...)
```

支持：

- Union
- Intersect
- Exclude
- Xor

---

# 阴影

## BoxShadow

```csharp
new BoxShadow
{
    Blur = 10
};
```

支持：

- 模糊
- 偏移
- Spread
- Inset

---

# 变换矩阵

## 平移

```csharp
Matrix.CreateTranslation(...)
```

---

## 缩放

```csharp
Matrix.CreateScale(...)
```

---

## 旋转

```csharp
Matrix.CreateRotation(...)
```

---

## 倾斜

```csharp
Matrix.CreateSkew(...)
```

---

# 可以实现的效果

- 分割线
- 图标
- SVG
- 波形图
- 折线图
- 柱状图
- 饼图
- 雷达图
- 时间轴
- 流程图
- 节点编辑器
- 曲线编辑器
- CAD简图
- 自定义进度条
- Loading动画
- Fluent Design 图标
- Material Design 图标
- 游戏UI

# 目前 DrawingContext 不支持

- Backdrop Blur
- Acrylic Blur
- Mica
- Shader
- GPU Fragment Shader
- 背景采样模糊

这些需要访问底层 Skia 或平台 API。