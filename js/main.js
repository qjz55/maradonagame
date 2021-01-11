$(function(){
	var btn_l = $('.btn_l');
	var btn_r = $('.btn_r');
	var line = $('.line');
	var con_l = $('.left_con');
	var con_r = $('.right_con');
	var cen = $('.content_right');
	var main_window = $('.main_con');
	var player_window = $('.player');
	var select_con = $('.select_con');
	var a = 123;
	var is_d = 0;
	var temp = 0;


	var h = $(window).height();
	var nowscreen = 0;
	var lens = $(".page").length;
	var timer = null;
	$(".page").css({"height": h});
	$(".points div").click(function(){
		nowscreen = $(this).index();
		$(".con").animate({'top': -h * nowscreen});
		$(".points div").eq(nowscreen).addClass("color_pointer").siblings().removeClass("color_pointer");
	})


	$(window).mousewheel(function(event, dat){
			clearTimeout(timer);
			timer = setTimeout(function(){
				if (dat==-1) nowscreen++;
				else nowscreen--;
				if (nowscreen<0) nowscreen = 0;
				if (nowscreen>lens - 1) nowscreen = lens - 1;
				$(".con").animate({'top': -h * nowscreen});
				$(".points div").eq(nowscreen).addClass("color_pointer").siblings().removeClass("color_pointer");
			}, 200)
		})



	$('#next').click(function(){
		$('.index').fadeOut(2000);
		$('.introduce').fadeIn(1000);
	})


	// story
	$('#transform').click(function(){
		// con_l.css({'width': 100%});
		// con_r.css({'width': 0});
		$('.introduce').fadeOut(2000);
		$('.player').fadeIn(2500);
		main_window.fadeIn(4000);
	})

	$('.story').click(function(){
		$('.story').css({'display': 'none'});
		$('.rule').css({'display': 'none'});
		con_l.animate({'width': '50%'}, 1000);
		con_r.animate({'width': '50%'}, 1000);
		var timer1 = setTimeout(function(){
			$('.l_a').fadeIn(2000);
		}, 4000)
		var timer2 = setTimeout(function(){
			select_con.fadeIn(1000);
		}, 10000)
	})

	$('#a_left').click(function(){
		select_con.fadeOut(1000);
		$('.l_a').fadeOut(2000);
		$('.r_a').fadeIn(2000);
		turn_r();
		var timer3 = setTimeout(function(){
			$('.l_b').fadeIn(2000);
			$('.r_a').fadeOut(2000);
			turn_r();
		}, 8000) // 记得修改
		var timer4 = setTimeout(function(){
			$('.r_b').fadeIn(2000);
			$('.l_b').fadeOut(2000);
			turn_r();
		}, 18000) // 记得修改
		var timer5 = setTimeout(function(){
			$('.question_a').addClass('hide_con');
			$('.question_b').removeClass('hide_con');
			$('#a_left').addClass('hide_con');
			$('#a_right').addClass('hide_con');
			$('#b_left').removeClass('hide_con');
			$('#b_right').removeClass('hide_con');
			select_con.fadeIn(1000);
		}, 28000)
	})


	// questionb
	$('#b_right').click(function(){
		select_con.fadeOut(1000);
		$('.r_b').fadeOut(2000);
		$('.l_c').fadeIn(2000);
		// questionc
		var timer6 = setTimeout(function(){
			$('.question_b').addClass('hide_con');
			$('.question_c').removeClass('hide_con');
			$('#b_left').addClass('hide_con');
			$('#b_right').addClass('hide_con');
			$('#c_left').removeClass('hide_con');
			$('#c_right').removeClass('hide_con');
			select_con.fadeIn(1000);
		}, 8000)
	})

	$('#c_left').click(function(){
		select_con.fadeOut(1000);
		$('.l_c').fadeOut(2000);
		$('.r_c').fadeIn(2000);
		turn_r();
		var timer7 = setTimeout(function(){
			$('.r_c').fadeOut(2000);
			$('.l_d').fadeIn(2000);
		}, 10000) // 记得修改
		// questiond
		var timer8 = setTimeout(function(){
			$('.question_c').addClass('hide_con');
			$('.question_d').removeClass('hide_con');
			$('#c_left').addClass('hide_con');
			$('#c_right').addClass('hide_con');
			$('#d_left').removeClass('hide_con');
			$('#d_right').removeClass('hide_con');
			select_con.fadeIn(1000);
		}, 20000)
	})


	// 选择反击
	$('#d_left').click(function(){
		is_d = 1;
		select_con.fadeOut(1000);
		$('.l_d').fadeOut(2000);
		$('.r_d').fadeIn(2000);
		turn_l();
		var timer9 = setTimeout(function(){
			$('.r_d').fadeOut(2000);
			$('.l_e').fadeIn(2000);
		}, 10000) // 记得修改
		var timer10 = setTimeout(function(){
			$('.l_e').fadeOut(2000);
			$('.r_e').fadeIn(2000);
		}, 18000) // 记得修改
		// var timer12 = setTimeout(function(){
		// 	$('.r_e').fadeOut(1000);
		// }, 8000) // 记得修改
		var timer8 = setTimeout(function(){
			$('.question_d').addClass('hide_con');
			$('.question_e').removeClass('hide_con');
			$('#d_left').addClass('hide_con');
			$('#d_right').addClass('hide_con');
			$('#e_left').removeClass('hide_con');
			$('#e_right').removeClass('hide_con');
			select_con.fadeIn(1000);
		}, 28000)
	})

	$('#d_right').click(function(){
		select_con.fadeOut(1000);
		$('.l_d').fadeOut(2000);
		var timer14 = setTimeout(function(){
			$('.l_e').fadeIn(2000);
		}, 10000)
		turn_r();
		var timer11 = setTimeout(function(){
			$('.l_e').fadeOut(2000);
			$('.r_e').fadeIn(2000);
		}, 18000) // 记得修改
		var timer8 = setTimeout(function(){
			$('.question_d').addClass('hide_con');
			$('.question_e').removeClass('hide_con');
			$('#d_left').addClass('hide_con');
			$('#d_right').addClass('hide_con');
			$('#e_left').removeClass('hide_con');
			$('#e_right').removeClass('hide_con');
			select_con.fadeIn(1000);
		}, 28000)
	})

	// questione上帝之手
	$('#e_left').click(function(){
		select_con.fadeOut(1000);
		turn_l();
		$('.r_e').fadeOut(2000);
		$('.l_f').fadeIn(2000);
		var timer18 = setTimeout(function(){
			if (is_d == 1){
				$('.l_f').fadeOut(2000);
				var timer19 = setTimeout(function(){
					$('.l_g').fadeIn(2000);
				}, 2000)
				var timer21 = setTimeout(function(){
					$('.l_g').fadeOut(2000);
					$('.r_h').fadeIn(2000);
				}, 12000)
				var timer24 = setTimeout(function(){
					end();
				}, 22000)
			}
			else {
				$('.l_f').fadeOut(2000);
				$('.r_g').fadeIn(2000);
				var timer23 = setTimeout(function(){
					$('.r_g').fadeOut(2000);
					$('.l_h').fadeIn(2000);
				}, 12000)
				var timer25 = setTimeout(function(){
					end();
				}, 22000)
			}
		}, 10000)
	})


	$('#e_right').click(function(){
		select_con.fadeOut(1000);
		$('.r_e').fadeOut(2000);
		var timer17 = setTimeout(function(){
			$('.r_f').fadeIn(2000);
		}, 2000)
		var timer18 = setTimeout(function(){
			if (is_d == 1){
				$('.r_f').fadeOut(2000);
				$('.l_g').fadeIn(2000);
				var timer22 = setTimeout(function(){
					$('.l_g').fadeOut(2000);
					$('.r_h').fadeIn(2000);
				}, 12000)
				var timer26 = setTimeout(function(){
					end();
				}, 22000)

			}
			else {
				$('.r_f').fadeOut(2000);
				var timer20 = setTimeout(function(){
					$('.r_g').fadeIn(2000);
				}, 2000)
				var timer27 = setTimeout(function(){
					$('.r_g').fadeOut(2000);
					$('.l_h').fadeIn(2000);
				}, 12000)
				var timer28 = setTimeout(function(){
					end();
				}, 22000)
			}
		}, 10000)
	})




	// 游戏结束
	$('#a_right').click(function(){
		end();
		temp = 1;
	})
	$('#b_left').click(function(){
		end();
		temp = 2;
	})
	$('#c_right').click(function(){
		end();
		temp = 3;
	})



	function turn_l(){
		// alert(con_l.width());
		if (con_l.width() >= 580){
			left_width = con_l.width() - 50;
			right_width = con_r.width() + 50;
			// alert(left_width);
			con_l.animate({'width': left_width}, 1000);
			con_r.animate({'width': right_width}, 1000);
		}
		else alert('you dead');
	}
	function turn_r(){
		if (con_r.width() >= 580){
			left_width = con_l.width() + 30;
			right_width = con_r.width() - 30;
			con_r.animate({'width': right_width}, 1000);
			con_l.animate({'width': left_width}, 1000);
		}
		else alert('you dead');
	}

	function end(){
		main_window.fadeOut(1000);
		$('.end_con').fadeIn(1000);
		var timerend = setTimeout(function(){
			if (temp == 1) $('.end1').fadeIn(2000);
			else if (temp == 2) $('.end2').fadeIn(2000);
			else if (temp == 3) $('.end3').fadeIn(2000);
			else $('.end0').fadeIn(2000);
		}, 2000)
		// $(window).attr('herf', '../end.html')
		// window.location.replace("end.html");
	}

	$('#end_btn').click(function(){
		window.location.replace("end.html");
	})
})