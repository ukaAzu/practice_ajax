<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>私の考えてることを当てて</title>
</head>

<body>
    <div class="outline_wrapper">
        <div class="wrapper">
            <img src="bo-ttoshiteru_woman.png">
            <div class="message">
                <p>唐澤さーん</p>
                <p id="request_message">言いたいことがあるんですよー</p>
            </div>
        </div>
        <form method="post" action="index.php">
            <label for="request">私が言いたいことを当ててみて<br>※「あ」から始まる言葉だよ</label><br>
            <input type="text" name="request" id="request" pattern="[\u3041-\u3096]*" placeholder="ひらがなで入力してね">
            <input type="button" value="これかな？" id="btn">
        </form>
        <div id="predict"></div>
    </div>
    <script type="text/javascript" src="request.js"></script>
</body>

</html>
