import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer_left'>
				<h1>Album and song details</h1>
			</div>
			<div className='footer_center'>
				<ShuffleIcon className='footer_green' />
				<SkipPreviousIcon className='footer_icon' />
				<PlayCircleOutlineIcon font-size='large' className='footer_icon' />
				<SkipNextIcon className='footer_icon' />
				<RepeatIcon className='footer_green' />
			</div>
			<div className='footer_right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item>
						<Slider aria-labelledby='continuous-slider' />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
