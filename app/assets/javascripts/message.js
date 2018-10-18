$(function(){
	function buildHTML(message){
		var html = `<div class = "chat-main__body--messages-list">
						<div class = "chat-main__message clearfix">
							<div class ="chat-main__message-name">
								<p>
									${message.name}
								</p>
							</div>
							<div class ="chat-main__message-time">
								<p>
									${message.created_at}
								</p>
							</div>
							<div class ="chat-main__message-body">
								<p>
									${message.content}
								</p>
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
			$('.message').val('')
			$('.chat-main__body').animate( {'scrollTop': $('.chat-main__body')[0].scrollHeight}, 'fast' );
		})
		.fail(function(){
			alert("エラーが発生しました");
		})
		.always(function(){
			$('.submit').prop('disabled', false);
		});
	})
});
