$(function(){
	function buildHTML(message){
		var html = `<div class = "chat-main__body--messages-list">
						<div class = "chat-main__message clearfix">
							<div class ="upper__message">
								<div class ="upper__message-name">
									${message.name}
								</div>
								<div class ="upper__message-time">
									${message.created_at}
								</div>
							</div>
							<div class="lower__message">
								<div class ="lower__message-content">
									${message.content}
								</div>
								<img class="lower__message-image" src="${message.image}"> 
							</div>
						</div>
					</div>`
		return html;
	}
	//非同期通信
	$('#new_message').on('submit' , function(e){
		e.preventDefault();
		var formData = new FormData(this);
		var url = $(this).attr('action');
		$.ajax({
			url: url,
			type: "POST",
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false
		})
		.done(function(message){
			var html = buildHTML(message);
			$('.chat-main__body').append(html) 
			$('.form__message').val('')
			$('.chat-main__body').animate( {'scrollTop': $('.chat-main__body')[0].scrollHeight}, 'fast' );
		})
		.fail(function(){
			alert("エラーが発生しました");
		})
		.always(function(){
			$('.form__submit').prop('disabled', false);
		});
	})
});
