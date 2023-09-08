import type { Meta, StoryObj } from '@storybook/react';

import { FlagCentralAfricanRepublicIcon } from '../src/react/flags';

const meta = {
  title: 'flags/FlagCentralAfricanRepublicIcon',
  component: FlagCentralAfricanRepublicIcon,
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
} satisfies Meta<typeof FlagCentralAfricanRepublicIcon>;

export default meta;

type Story = StoryObj<typeof FlagCentralAfricanRepublicIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
