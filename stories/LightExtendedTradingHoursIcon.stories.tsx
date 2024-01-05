import type { Meta, StoryObj } from '@storybook/react';

import { LightExtendedTradingHoursIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightExtendedTradingHoursIcon',
  component: LightExtendedTradingHoursIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightExtendedTradingHoursIcon>;

export default meta;

type Story = StoryObj<typeof LightExtendedTradingHoursIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
