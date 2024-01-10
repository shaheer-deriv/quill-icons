import type { Meta, StoryObj } from '@storybook/react';

import { PlatformsDerivAppsLightIcon } from '../src/react/Platforms';

const meta = {
  title: 'platforms/PlatformsDerivAppsLightIcon',
  component: PlatformsDerivAppsLightIcon,
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
} satisfies Meta<typeof PlatformsDerivAppsLightIcon>;

export default meta;

type Story = StoryObj<typeof PlatformsDerivAppsLightIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
