import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneArrowDownOneNineRegularIcon } from '../src/react/System/Standalone';

const meta = {
  title: 'standalone/StandaloneArrowDownOneNineRegularIcon',
  component: StandaloneArrowDownOneNineRegularIcon,
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
} satisfies Meta<typeof StandaloneArrowDownOneNineRegularIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneArrowDownOneNineRegularIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
