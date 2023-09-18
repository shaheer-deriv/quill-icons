import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeAntivirusAndFirewallsIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeAntivirusAndFirewallsIcon',
  component: IllustrativeAntivirusAndFirewallsIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IllustrativeAntivirusAndFirewallsIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeAntivirusAndFirewallsIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
