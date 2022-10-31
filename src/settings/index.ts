import { App, PluginSettingTab } from 'obsidian';
import WeatherGenerator from '../main';
import FantasyCalendarJsonParseSetting from './fantasyCalendarJsonParse';

export class WeatherGeneratorSettingTab extends PluginSettingTab {
	private plugin: WeatherGenerator;

	constructor(app: App, plugin: WeatherGenerator) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
        const { plugin, containerEl, app } = this;
        containerEl.empty();

        containerEl.createEl('h2', {text: 'Weather Generator' });

        containerEl.createEl('h3', {text: 'Fantasy Calendar' });
        new FantasyCalendarJsonParseSetting(plugin, containerEl).display();
	}
}