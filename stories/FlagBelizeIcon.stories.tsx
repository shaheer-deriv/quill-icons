import type { Meta, StoryObj } from '@storybook/react';

import { FlagBelizeIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagBelizeIcon',
  component: FlagBelizeIcon,
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
} satisfies Meta<typeof FlagBelizeIcon>;

export default meta;

type Story = StoryObj<typeof FlagBelizeIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
